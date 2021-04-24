import * as React from 'react';
import { gql, useQuery } from '@apollo/client';
import { List, Avatar } from 'antd';

// const GET_CHARACTERS = gql`
//   query Characters ($gender: String!, $status: String!) {
//     characters (filter: { gender: $gender, status: $status }) @connection(key: "characters", filter: ["gender"]) {
//       results {
//         id,
//         name, 
//         gender,
//         status,
//         image,
//       }
//     } 
//   }
// `;
const GET_CHARACTERS = gql`
  query Characters {
    characters {
      results {
        id,
        name, 
        gender,
        status,
        image,
      }
    } 
  }
`;

interface Character {
  id: string;
  name: string;
  status: string;
  gender: string;
  image: string;
}

interface Filter {
  [key: string]: string;
}

const Characters: React.FC = () => {
  const [filteredData, setFilteredData] = React.useState<Character[]>([])
  const [status, setStatus] = React.useState<string>('Alive')
  const { loading, error, data } = useQuery(GET_CHARACTERS);
  const [genderFilter, setGenderFilter] = React.useState<string | null>(null)
  const [statusFilter, setStatusFilter] = React.useState<string | null>(null)
  const [filters, setFilters] = React.useState<Filter[]>([])

  

  React.useEffect(() => {

    if (!loading && !error) {
      const characters = data.characters.results as Character[];
    
      if (genderFilter && !statusFilter) {
        setFilteredData(characters.filter(item => {
          return item.gender === genderFilter
        }))
      } else if (!genderFilter && statusFilter) {
        setFilteredData(characters.filter(item => {
          return item.status === statusFilter
        }))
      } else if (genderFilter && statusFilter) {
        setFilteredData(characters.filter(item => {
          return item.gender === genderFilter && item.status === statusFilter
        }))
      } else {
        setFilteredData(characters)
      }
    }
  }, [data, error, filters, genderFilter, loading, statusFilter])

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    console.error(error);
    return <div>Error!</div>;
  }

  const getList = (key: 'gender' | 'status') => {
    const characters = data.characters.results as Character[]
    const rawStatus = characters.map(item => item[key])
    return rawStatus.filter((item, index) => rawStatus.indexOf(item) === index)
  }

  const statusList = getList('status')
  const genderList = getList('gender')

  
  const toggleGenderFilters = (value: string) => {
    setGenderFilter(prevState => prevState === value ? null : value)
  }
  const toggleStatusFilters = (value: string) => {
    setStatusFilter(prevState => prevState === value ? null : value)
  }



  return (
    <>
    <div>
      <h3>Filter by:</h3>
      <div>
        Gender:
        {genderList.map(value => (
          <span 
            style={{fontWeight: genderFilter === value ? 'bold' : 'normal'}} 
            onClick={() => toggleGenderFilters(value)}
          >
            {value}
          </span>
        ))}
      </div>
      <div>
        Status:
        {statusList.map(value => (
          <span
            style={{fontWeight: statusFilter === value ? 'bold' : 'normal'}}
            onClick={() => toggleStatusFilters(value)}
          >
            {value}
          </span>
        ))}
      </div>
    </div>
    <List
    itemLayout="horizontal"
    dataSource={filteredData}
    renderItem={item => (
      <List.Item>
        <List.Item.Meta
          avatar={<Avatar src={item.image} />}
          title={<a href="https://ant.design">{item.name} - {item.status} - {item.gender}</a>}
        />
      </List.Item>
    )}
  />
  </>
  )
}

export default Characters
import * as React from 'react';
import { List, Avatar } from 'antd';
import Filters from './Filters';

export interface Character {
  id: string;
  name: string;
  status: string;
  gender: string;
  image: string;
}

interface Props {
  characters: Character[];
}

const ListCharacters: React.FC<Props> = ({ characters }) => {
  const [filteredData, setFilteredData] = React.useState<Character[]>([]);
  const [genderFilter, setGenderFilter] = React.useState<string | null>(null);
  const [statusFilter, setStatusFilter] = React.useState<string | null>(null);

  React.useEffect(() => {
    if (genderFilter && !statusFilter) {
      setFilteredData(
        characters.filter(item => {
          return item.gender === genderFilter;
        }),
      );
    } else if (!genderFilter && statusFilter) {
      setFilteredData(
        characters.filter(item => {
          return item.status === statusFilter;
        }),
      );
    } else if (genderFilter && statusFilter) {
      setFilteredData(
        characters.filter(item => {
          return item.gender === genderFilter && item.status === statusFilter;
        }),
      );
    } else {
      setFilteredData(characters);
    }
  }, [characters, genderFilter, statusFilter]);

  const toggleGenderFilters = (value: string) => {
    setGenderFilter(prevState => (prevState === value ? null : value));
  };
  const toggleStatusFilters = (value: string) => {
    setStatusFilter(prevState => (prevState === value ? null : value));
  };

  return (
    <>
      <Filters
        characters={characters}
        genderFilter={genderFilter}
        statusFilter={statusFilter}
        toggleGenderFilters={toggleGenderFilters}
        toggleStatusFilters={toggleStatusFilters}
      />
      <List
        itemLayout="horizontal"
        dataSource={filteredData}
        renderItem={item => (
          <List.Item>
            <List.Item.Meta
              avatar={<Avatar src={item.image} />}
              title={
                <a href="https://ant.design">
                  {item.name} - {item.status} - {item.gender}
                </a>
              }
            />
          </List.Item>
        )}
      />
    </>
  );
};

export default ListCharacters;

import * as React from 'react';
import { List, Avatar, Pagination, PageHeader, Input } from 'antd';
import { Link } from 'react-router-dom';
import Search from 'antd/lib/input/Search';
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
  pages: number;
  page: number;
  setPage(page: number): void;
  genderFilter: string;
  toggleGenderFilters(status: string): void;
  statusFilter: string;
  toggleStatusFilters(status: string): void;
  name: string;
  setName(name: string): void;
}

const ListCharacters: React.FC<Props> = ({
  characters,
  genderFilter,
  toggleGenderFilters,
  statusFilter,
  toggleStatusFilters,
  name,
  setName,
  pages,
  page,
  setPage,
}) => {
  const inputRef = React.useRef<Input | null>(null);
  React.useEffect(() => {
    if (name && inputRef.current) {
      inputRef.current.input.value = name;
    }
  }, [name]);
  return (
    <>
      <PageHeader className="site-page-header" title="Characters" />
      <Filters
        genderFilter={genderFilter}
        statusFilter={statusFilter}
        toggleGenderFilters={toggleGenderFilters}
        toggleStatusFilters={toggleStatusFilters}
      />
      <Search
        ref={inputRef}
        placeholder="search by character name"
        onSearch={setName}
        style={{ width: 200 }}
      />
      <List
        itemLayout="horizontal"
        size="small"
        dataSource={characters}
        renderItem={item => (
          <List.Item>
            <List.Item.Meta
              avatar={<Avatar src={item.image} />}
              title={
                <Link to={`/character/${item.id}`}>
                  {item.name} - {item.status} - {item.gender}
                </Link>
              }
            />
          </List.Item>
        )}
      />
      <Pagination
        current={page}
        total={pages}
        onChange={setPage}
        defaultCurrent={1}
        simple
      />
    </>
  );
};

export default ListCharacters;

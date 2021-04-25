import { List, PageHeader } from 'antd';
import * as React from 'react';
import { Link, useHistory } from 'react-router-dom';

interface Episode {
  id: number;
  name: string;
  characters: {
    id: number;
    name: string;
  }[];
}

interface Props {
  episode: Episode;
}

const LocationContainer: React.FC<Props> = ({ episode }) => {
  const history = useHistory();
  return (
    <>
      <PageHeader
        title={`Episode: ${episode.name}`}
        onBack={() => history.goBack()}
      />
      <List
        style={{ padding: '15px' }}
        size="small"
        dataSource={episode.characters}
        header={<strong>Characters</strong>}
        renderItem={item => (
          <List.Item>
            <Link to={`/character/${item.id}`}>{item.name}</Link>
          </List.Item>
        )}
      />
    </>
  );
};

export default LocationContainer;

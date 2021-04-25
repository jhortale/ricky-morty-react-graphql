import * as React from 'react';
import { useHistory, Link } from 'react-router-dom';
import { Divider, List, PageHeader, Descriptions } from 'antd';

import { Character } from '../ListCharacters';

interface CharacterProfile extends Character {
  episode: {
    id: number;
    name: string;
  }[];
  location: {
    id: number;
    name: string;
  };
}

interface Props {
  character: CharacterProfile;
}

const CharacterProfile: React.FC<Props> = ({ character }) => {
  const history = useHistory();
  return (
    <>
      <PageHeader
        title={`Character: ${character.name}`}
        onBack={() => history.goBack()}
      />
      <Descriptions bordered size="small" layout="vertical">
        <Descriptions.Item label="Status">{character.status}</Descriptions.Item>
        <Descriptions.Item label="Location">
          <Link to={`/location/${character.location.id}`}>
            {character.location.name}
          </Link>
        </Descriptions.Item>
      </Descriptions>
      <Divider />
      <List
        style={{ padding: '15px' }}
        size="small"
        dataSource={character.episode}
        header={<strong>Episodes</strong>}
        renderItem={item => (
          <List.Item>
            <Link to={`/episodes/${item.id}`}>{item.name}</Link>
          </List.Item>
        )}
      />
    </>
  );
};

export default CharacterProfile;

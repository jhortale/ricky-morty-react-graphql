import { List, PageHeader } from 'antd';
import * as React from 'react';
import { Link, useHistory } from 'react-router-dom';

interface Location {
  id: number;
  name: string;
  residents: {
    id: number;
    name: string;
  }[];
}

interface Props {
  location: Location;
}

const LocationContainer: React.FC<Props> = ({ location }) => {
  const history = useHistory();
  return (
    <>
      <PageHeader
        title={`Location: ${location.name}`}
        onBack={() => history.goBack()}
      />
      <List
        style={{ padding: '15px' }}
        size="small"
        dataSource={location.residents}
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

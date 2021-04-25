import * as React from 'react';
import { Layout, Typography } from 'antd';

const { Title } = Typography;

const { Header, Content } = Layout;

const LayoutContainer: React.FC = ({ children }) => {
  return (
    <Layout>
      <Header style={{ padding: 10 }}>
        <Title style={{ color: '#fff' }}>Rick & Morty Api</Title>
      </Header>
      <Content>{children}</Content>
    </Layout>
  );
};

export default LayoutContainer;

import * as React from 'react';
import { Space, Tag, Typography } from 'antd';

const { Text } = Typography;

const { CheckableTag } = Tag;

const gender = ['Male', 'Female', 'Unknown'];

const status = ['Alive', 'Dead', 'Unknown'];

interface Props {
  genderFilter: string | null;
  statusFilter: string | null;
  toggleGenderFilters(value: string): void;
  toggleStatusFilters(value: string): void;
}

const Filters: React.FC<Props> = ({
  genderFilter,
  statusFilter,
  toggleStatusFilters,
  toggleGenderFilters,
}) => {
  return (
    <Space size="small" direction="vertical" style={{ padding: '15px' }}>
      <Text>
        <strong>Filter by:</strong>
      </Text>
      <Text>
        Gender:
        {gender.map(value => (
          <CheckableTag
            key={value}
            checked={genderFilter === value}
            onClick={() => toggleGenderFilters(value)}
          >
            {value}
          </CheckableTag>
        ))}
      </Text>
      <Text>
        Status:
        {status.map(value => (
          <CheckableTag
            key={value}
            checked={statusFilter === value}
            onClick={() => toggleStatusFilters(value)}
          >
            {value}
          </CheckableTag>
        ))}
      </Text>
    </Space>
  );
};

export default Filters;

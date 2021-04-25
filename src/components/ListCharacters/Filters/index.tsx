import * as React from 'react';
import { Tag } from 'antd';

const { CheckableTag } = Tag;

const gender = ['Male', 'Female', 'Unknown'];

const status = ['Active', 'Dead', 'Unknown'];

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
    <div>
      <h3>Filter by:</h3>
      <div>
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
      </div>
      <div>
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
      </div>
    </div>
  );
};

export default Filters;

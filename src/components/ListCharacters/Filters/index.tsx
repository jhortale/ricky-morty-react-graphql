import * as React from 'react';
import { Tag } from 'antd';
import { Character } from '..';

const { CheckableTag } = Tag;

interface Props {
  characters: Character[];
  genderFilter: string | null;
  statusFilter: string | null;
  toggleGenderFilters(value: string): void;
  toggleStatusFilters(value: string): void;
}

const Filters: React.FC<Props> = ({
  characters,
  genderFilter,
  statusFilter,
  toggleStatusFilters,
  toggleGenderFilters,
}) => {
  const getList = (key: 'gender' | 'status') => {
    const rawStatus = characters.map(item => item[key]);
    return rawStatus.filter((item, index) => rawStatus.indexOf(item) === index);
  };

  const statusList = getList('status');
  const genderList = getList('gender');
  return (
    <div>
      <h3>Filter by:</h3>
      <div>
        Gender:
        {genderList.map(value => (
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
        {statusList.map(value => (
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

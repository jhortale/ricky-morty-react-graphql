import * as React from 'react';
import { Character } from '..';

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
          <span
            key={value}
            style={{ fontWeight: genderFilter === value ? 'bold' : 'normal' }}
            onKeyDown={() => toggleGenderFilters(value)}
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
            key={value}
            style={{ fontWeight: statusFilter === value ? 'bold' : 'normal' }}
            onKeyDown={() => toggleStatusFilters(value)}
            onClick={() => toggleStatusFilters(value)}
          >
            {value}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Filters;

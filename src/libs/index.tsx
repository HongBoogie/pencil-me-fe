import { useQuery } from 'react-query';

import axios from 'axios';

export const GroupQuery = () => {
  const { isLoading, isError, data, error } = useQuery('group', () => {
    return axios.get('http://capstone.na2ru2.me/api/v1/categories');
  });

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error</div>;

  return <></>;
};

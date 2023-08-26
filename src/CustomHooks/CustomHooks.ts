import {useQuery} from '@apollo/client';
import {getListZellerCustomers} from '../query/getListZellerCustomers';

export const useUserFetchDetails = () => {
  const {loading, error, data} = useQuery(getListZellerCustomers);
  return [loading, error, data];
};

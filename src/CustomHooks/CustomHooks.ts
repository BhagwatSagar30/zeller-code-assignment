import {useQuery} from '@apollo/client';
import {getListZellerCustomers} from '../query/getListZellerCustomers';

export const useUserFetchDetails = () => {
  try {
    const {loading, error, data} = useQuery(getListZellerCustomers);
    return [loading, error, data];
  } catch (error) {
    return [error];
  }
};

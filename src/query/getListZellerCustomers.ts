import {gql} from '@apollo/react-hooks';

export const getListZellerCustomers = gql`
  query GetListZellerCustomers {
    listZellerCustomers {
      items {
        id
        name
        email
        role
      }
    }
  }
`;

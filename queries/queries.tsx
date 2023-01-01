import { gql } from '@apollo/client';

export const GET_MENUS = gql`
query GetMenus{
    training
    menu
    weight
    count
  }
}
`;

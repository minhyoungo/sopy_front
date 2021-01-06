import { gql } from "apollo-boost";

export const RESIST_USER = gql`
  mutation registUser(
    # 여기서의 달러는 해당 데이터타입(문자열)을 받을 수 있는 준비상태를 뜻한다.
    $name: String!
    $email: String!
    $nickName: String!
    $mobile: String!
    $zoneCode: String!
    $address: String!
    $detailAddress: String!
  ) {
    registUser(
      name: $name
      email: $email
      nickName: $nickName
      mobile: $mobile
      zoneCode: $zoneCode
      address: $address
      detailAddress: $detailAddress
    )
  }
`;

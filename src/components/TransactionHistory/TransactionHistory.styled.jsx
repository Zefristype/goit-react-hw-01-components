import styled from '@emotion/styled';

export const Table = styled.table`
  margin-top: 50px;
  width: 800px;
  border: 1px solid #e0e0e0;
  border-spacing: 0px;
  border-collapse: 0px;
  
  
`;
export const Tr = styled.tr`
  height: 50px;
  :nth-child(2n) {
    background-color: #e0e1eeb3;
  }
`;
export const Th = styled.th`
  border: 1px solid #e0e0e0;
  color: #ffffff;
  background-color: #34d5eb;
`;
export const Td = styled.td`
  border: 1px solid #e0e0e0;
  color: grey;
  text-align: center;
  font-size: 16px;
  text-transform: capitalize;
`;

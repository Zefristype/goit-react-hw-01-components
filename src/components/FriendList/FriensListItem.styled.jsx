import styled from '@emotion/styled';

export const Item = styled.li`
  display: flex;
  align-items: center;
  justify-content: left;
  width: 320px;
  padding: 12px;
  border: 3px solid #e0e0e0;
`;

export const Avatar = styled.img`
  display: block;
  width: 80px;
  height: auto;
  margin-left: 12px;
  border: 3px solid #e0e0e0;
`;

export const Status = styled.span`
  background-color: ${props => (props.isOnline ? 'green' : 'red')};
  border-radius: 50%;
  width: 15px;
  height: 15px;
`;

export const Name = styled.p`
  font-size: 20px;
  font-weight: 500;
  margin-left: 30px;
`;

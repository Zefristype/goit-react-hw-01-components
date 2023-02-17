import styled from '@emotion/styled';

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
  border: 1px solid #e0e0e0;
`;

export const Title = styled.h2`
  padding: 50px 0;
`;

export const StatList = styled.ul`
  display: flex;

  list-style: none;
`;

export const StatItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 5px;
  height: 90px;
  width: 90px;
  font-size: 20px;
  border: 1px solid #e0e0e0;
  color: white;

`;

import styled from '@emotion/styled';

export const Card = styled.div`
  border: 1px solid #e0e0e0;
`;
export const Description = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-wrap: wrap;
  gap: 10px;
  padding: 36px;
`;

export const StatsList = styled.ul`
  display: flex;
  list-style: none;
`;

export const StatItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 5px;
  padding: 36px;
  width: calc(100% / 3);
  border: 1px solid #e0e0e0;
  background-color: #ebf0f3bd;
`;

export const Label = styled.span`
  color: grey;
  font-size: 18px;
`;

export const Quantity = styled.span`
  font-size: 20px;
  font-weight: bold;
`;

export const Img = styled.img`
  display: block;
  max-width: 100%;
  width: 140px;
  height: auto;
  margin: 0 auto;
`;

export const Name = styled.p`
  font-size: 25px;
  font-weight: 500;
`;
export const Tag = styled.p`
  color: grey;
  font-size: 20px;
`;
export const Location = styled.p`
  color: grey;
  font-size: 20px;
`;

import styled from '@emotion/styled';

export const Wrapper = styled.div`
  padding: 10px;
  width: 400px;
  margin: auto;
  background: rgba(17, 148, 96, 0.39);
  border-radius: 36px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(7.5px);
  -webkit-backdrop-filter: blur(7.5px);
  border: 1px solid rgba(17, 148, 96, 0.85);
`;

export const StatsList = styled.ul`
  margin: 10px;
`;

export const ListItem = styled.li`
  list-style: none;
  margin-bottom: 10px;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 1.3px;
  display: flex;
  justify-content: space-between;
  color: #07162c;
`;
export const ItemValue = styled.span`
  padding-right: 30px;
  font-weight: 600;
`;

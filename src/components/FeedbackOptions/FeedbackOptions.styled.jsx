import styled from '@emotion/styled';

export const Button = styled.button`
  border-radius: 11px;
  background: #55709b;
  box-shadow: 2px 2px 5px #445a7c, -2px -2px 5px #6686ba;
  padding: 20px 22px;
  margin-left: 20px;
  border-width: 0;
  font-size: 24px;
  font-weight: 500;
  text-transform: uppercase;
  transition: all 350ms cubic-bezier(0.455, 0.03, 0.515, 0.955);
  &: hover {
    background: rgb(98, 115, 154);
    background: radial-gradient(
      circle,
      rgba(98, 115, 154, 1) 22%,
      rgba(81, 184, 149, 1) 87%
    );
  }
`;

import styled from 'styled-components';

export const List = styled.ol`
  padding: 20px 10px;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const ListItem = styled.li`
  display: flex;
`;

export const Text = styled.span``;

export const Button = styled.button`
  background-color: #ffcce6;
  cursor: pointer;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  border-radius: 4px;
  border: 1px solid #ffcce6;
  padding: 5px 20px;
  text-transform: uppercase;
  margin-left: auto;

  transition: background-color 250ms linear, border 250ms linear;

  &:hover,
  &:focus {
    background-color: #ffb3da;
    border: 1px solid #99004f;
  }
`;

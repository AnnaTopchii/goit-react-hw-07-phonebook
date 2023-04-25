import styled from 'styled-components';
import { Form as FormikForm, ErrorMessage as FormikError } from 'formik';

export const Form = styled(FormikForm)`
  padding: 20px 10px;
  border: 2px solid #99004f;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-bottom: 20px;
`;

export const FormField = styled.label`
  display: flex;
  flex-direction: column;
`;

export const ErrorMessage = styled(FormikError)`
  color: tomato;
`;

export const Button = styled.button`
  width: 200px;
  font-weight: 700;
  align-self: center;
  background-color: #ffcce6;
  cursor: pointer;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  border-radius: 4px;
  border: 1px solid #ffcce6;
  padding: 5px 20px;
  text-transform: uppercase;

  transition: background-color 250ms linear, border 250ms linear;

  &:hover,
  &:focus {
    background-color: #ffb3da;
    border: 1px solid #99004f;
  }
`;

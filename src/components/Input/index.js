import styled from 'styled-components';

const InputBase = styled.input`
  width: 100%;
  padding: 15px;
  font-size: 1rem;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  color: ${theme => theme.colors.contrastText};
  background-color: ${theme => theme.colors.mainBg};
  border-radius: ${theme => theme.borderRadius};
  outline: 0;
  margin-bottom: 25px;
`;

export default function Input() {
  return (
    <div>
      <InputBase />
    </div>
  );
}

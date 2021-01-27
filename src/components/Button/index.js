import styled from 'styled-components';

const ButtonBase = styled.button`
  width: 100%;
  background-color: #3fc0ac;
  border: 2px solid #3fc0ac;
  transition: all ease-in 0.3s;
  padding: 5px;
  border-radius: 4px;
  color: #ffffff;
  cursor: pointer;
  outline: none;
  box-shadow: none;
  &:hover {
    background-color: #1b6a63;
    border-color: #1b6a63;
  }
  &:disabled {
    opacity: 0.5;
  }
  &:disabled:hover {
    background-color: #3fc0ac;
    border: 2px solid #3fc0ac;
    cursor: not-allowed;
  }
`;

export default function Button({ onChange, placeholder, ...props }) {
  return (
    <div>
      <ButtonBase onChange={onChange} placeholder={placeholder} {...props} />
    </div>
  );
}

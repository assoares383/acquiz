import styled from "styled-components";

const Widget = styled.div`
  margin-top: 24px;
  margin-bottom: 24px;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  background: url("https://static-dm.akamaized.net/assassins-creed/valhalla/prod/ki_updates-highlight-content-bkg-mobile_ncsa.png")
    no-repeat;
  border-radius: 4px;
  overflow: hidden;
  h1,
  h2,
  h3 {
    font-size: 16px;
    font-weight: 700;
    line-height: 1;
    margin-bottom: 0;
  }
  p {
    font-size: 14px;
    font-weight: 400;
    line-height: 1;
  }
`;

Widget.Header = styled.header`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 18px 32px;
  background-color: ${({ theme }) => theme.colors.primary};

  * {
    margin: 0;
  }
`;

Widget.Content = styled.div`
  padding: 24px 32px 32px 32px;
  & > *:first-child {
    margin-top: 0;
  }
  & > *:last-child {
    margin-bottom: 0;
  }
  ul {
    list-style: none;
    padding: 0;
  }
  form {
    display: flex;
    flex-direction: column;
    input {
      margin-bottom: 15px;
      padding: 7px;
      outline: none;
      box-shadow: none;
    }
    button {
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
    }
  }
`;

export default Widget;

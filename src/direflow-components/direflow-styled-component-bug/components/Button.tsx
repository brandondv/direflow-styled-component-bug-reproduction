import styled from "styled-components";

export const Button = styled.button<any>`
  width: 150px;
  height: 45px;
  font-family: "Noto Sans JP", sans-serif;
  font-size: 20px;
  font-weight: bold;
  color: white;
  box-shadow: 2px 2px 5px #16314d98;
  outline: none;
  border: 0;
  cursor: pointer;
  transition: 0.3s;
  background-color: ${({ color }) => color};
`;

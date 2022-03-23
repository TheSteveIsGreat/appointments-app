import styled from "styled-components";

export const Code = styled.pre`
    color:#000000;
`;

const StringifyJSON = ({json}) => {
  return <Code>{JSON.stringify(json,null,2)}</Code>;
};

export default StringifyJSON
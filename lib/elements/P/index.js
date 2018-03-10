import styled from "styled-components";

import {
  fontColors,
  fontSizes,
  fontStyles,
  fontWeights
} from "../../modifiers";

const modifierConfig = {
  ...fontColors,
  ...fontSizes,
  ...fontStyles,
  ...fontWeights,
};

function flow(props) {
  if (props.flow) {
    return 'font-size: 1.2rem;';
  }
  return null;
}

const P = styled.p`
  margin: 0;
`;

P.modifiers = modifierConfig;

/** @component */
export default P;

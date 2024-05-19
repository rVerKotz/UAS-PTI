import styled, { css } from "styled-components";

export const Flex = styled.div`
  position: relative;
  display: flex;
  align-items: center;

  ${({ $spaceBetween }) =>
    $spaceBetween &&
    css`
      justify-content: space-between;
    `}

  ${({ $flexEnd }) =>
    $flexEnd &&
    css`
      justify-content: flex-end;
    `}

  ${({ $alignTop }) =>
    $alignTop &&
    css`
      align-items: flex-start;
    `}

  ${({ $noHeight }) =>
    $noHeight &&
    css`
      height: 0;
    `}
`;
import styled, { css } from "styled-components";
import { buttonTypes, outline, primary, secondary } from "./button.types";

export const Button = styled.button.withConfig({
  shouldForwardProp:(props)=>!props.includes("variant")&&!props.includes("btnsize")
})<buttonTypes>`
 border-radius: 8px;
  font-size: 18px;
  border: 1px solid ${props=>props.theme.colors.primary};
  padding: 8px;
  &:disabled {
    opacity: 50%;
  }
  ${props =>
        props.variant === primary &&
        css`
      background-color: ${props.theme.colors.primary};
      color: ${props.theme.colors.white};
    `}

  ${props =>
        props.variant === secondary &&
        css`
      background-color: ${props.theme.colors.lightcolor};
      color: ${props.theme.colors.primary};
    `}
    ${props =>
      props.variant === outline &&
      css`
    color: ${props.theme.colors.primary};
    font-size: 23px;
    font-weight: 700;
    border: 1px solid indigo;
    border-radius: 7px;
  `}
   
    ${props =>
        props.btnsize === 'sm' &&
        css`
      font-size: 12px;
    `}

    ${props =>
        props.btnsize === 'md' &&
        css`
      font-size: 16px;
      border-radius: 6px;
    `}
`

import { HtmlHTMLAttributes } from "react";
import styled, { css } from "styled-components";

export const Flex = styled.div.withConfig({
    shouldForwardProp:(props)=>!props.includes("justify")&&!props.includes("align")
  })<{ justify?: string, align?: string }, HtmlHTMLAttributes<HTMLDivElement>>`
display:flex;
    ${props =>
        props.justify &&
        css`
    justify-content:${props.justify};
    `}
    ${props =>
        props.align &&
        css`
        align-items:${props.align};
    `}
`
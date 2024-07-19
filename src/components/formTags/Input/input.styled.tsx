import styled, { css } from "styled-components";

export const TextInput=styled.input`
border-radius:8px;
border:1px solid grey;

${props=>css`border:2px solid ${props.theme.color.primary}`};

`
export const CheckBoxInput=styled.input`

`

export const LabelWrpapper=styled.div`
width:100%
position:realtive
`
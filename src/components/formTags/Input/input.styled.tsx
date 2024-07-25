import styled, { css } from "styled-components";

export const TextInput=styled.input`
border-radius:8px;
border:1px solid grey;
&:focus{
border:1px solid ${props=>props.theme.colors.primary};
}
&:focus-visible{
outline:0px;
}
`
export const CheckBoxInput=styled.input`

`

export const LabelWrpapper=styled.div`
width:100%
position:realtive
`
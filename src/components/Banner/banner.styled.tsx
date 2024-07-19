import styled from "styled-components";

export const BannerWrapper=styled.section`
width: 100%;
.ban_img,img {
  height: calc(100vh - 90px);
  width: 100%;
  position: relative;
}
.ban_text {
 position: absolute;
  top: 50%;
  left: 6%;
  transform: translateY(-50%);
 strong {
  color: #fff;
  text-transform: uppercase;
}
 @media only screen and (max-width: 767px) {
  .ban_img {
  img {
    min-height: 290px;
    object-fit: cover;
  }
 }
}

@media only screen and (max-width: 480px) {
  .ban_text {
    left: 2%;
  }
}

`
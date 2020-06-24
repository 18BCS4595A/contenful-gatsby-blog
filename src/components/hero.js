/** @jsx jsx */
import React from "react";
import styled from "@emotion/styled";
import { css, jsx } from "@emotion/core";
import BackgroundImage from "gatsby-background-image";

const ImageBackground = styled(BackgroundImage)`
  background-position: top 60% center;
  background-size: cover;
  height: 50vh;
  margin: 0;
  + * {
    margin: 0;
  }
`;

const ImageText = styled("div")`
  background-image: linear-gradient(
    to top,
    rgba(28, 26, 35, 0.7) 2rem,
    rgba(28, 26, 35, 0.6),
    rgba(28, 26, 35, 0.5),
    rgba(28, 26, 35, 0.4)
  );
  display: flex;
  flex-direction: column;

  height: 100%;
  width: 100%;

  justify-content: center;
  text-align: center;
  color: white;
  h1,
  h2,
  p {
    margin: 0;
  }
  p {
    font-size: 1.4rem;
  }
  @media (max-width: 600px) {
    font-size: 1.2rem;
    h1,
    h2,
    p {
      font-size: 1.3rem;
    }
  }
`;

const DigitalProfile = styled("div")`
  background-color: red;
  border-radius: 100%;
  margin-top: 2%;
  align-self: center;
  @media (min-width: 600px) {
    height: 100px;
    width: 100px;
  }
`;

export default ({ data: { name, heroImage, shortBio, title } }) => {
  return (
    <ImageBackground Tag="section" fluid={heroImage.fluid} fadeIn="soft">
      <ImageText>
        <h1>
          Hello I'm
          <span
            css={css`
              color: black;
              font-weight: bold;
            `}
          >
            {" " + name + "👀"}
          </span>
        </h1>
        <h2>{title}</h2>
        <p>
          <i class="fas fa-quote-left"></i>
          {" " + shortBio.shortBio + " "}
          <i class="fas fa-quote-right"></i>
        </p>
      </ImageText>
    </ImageBackground>
  );
};

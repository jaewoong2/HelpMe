import { css, keyframes } from '@emotion/react';
import styled from '@emotion/styled';
import { TypoGraphy } from '@styles/typo';
import React from 'react';

type Props = {};

const Loading = (props: Props) => {
  return (
    <Container>
      <div className="title">
        <div className="box box-1">Find Maestro</div>
        <div className="box box-2">Find Maestro</div>
        <div className="box box-3">Find Maestro</div>
        <div className="box box-4">Find Maestro</div>
      </div>
    </Container>
  );
};

export default Loading;

const getBoxAnimation = (number: number) => {
  const animation = keyframes`
      0% {
        ${
          number === 4
            ? css`
                background-color: #6358ff;
                color: white;
              `
            : ``
        }
        transform: rotate3d(2, -1, -1, -0.2turn) translate(-${(number - 1) * 60}px, -${number * 20}px);
      }

      25% {
        transform: rotate3d(2, -1, -1, -0.2turn) translate(-${(number - 1) * 20}px, -${number * 20}px);

      }
  
      50% {
        transform: rotate3d(2, -1, -1, -0.2turn) translate(0px, 0px);

      }

      75% {
        transform: rotate3d(2, -1, -1, -0.2turn) translate(-${(number - 1) * 20}px, -${number * 20}px);
      }

        100% {
            transform: rotate3d(2, -1, -1, -0.2turn) translate(-${(number - 1) * 60}px, -${number * 20}px);

        }

    `;

  console.log(animation);
  return animation;
};

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  ${TypoGraphy.Title}

  p {
    padding: 0;
    margin: 0;
  }

  .title {
    width: 150px;
    position: relative;
    aspect-ratio: 1 / 1;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    color: white;
    font-size: 36px;
  }

  .box {
    position: absolute;

    z-index: -1;

    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
  }

  .box-1 {
    width: 145px;
    height: 145px;
    background-color: #000000;
    animation: ${getBoxAnimation(1)} 6s linear infinite;
  }

  .box-2 {
    width: 145px;
    height: 145px;
    background-color: #ffdb7a;
    animation: ${getBoxAnimation(2)} 6s linear infinite;
  }

  .box-3 {
    width: 145px;
    height: 145px;
    background-color: rgb(153, 255, 195);
    animation: ${getBoxAnimation(3)} 6s linear infinite;
  }

  .box-4 {
    width: 150px;
    height: 150px;
    background-color: #6358ff;
    animation: ${getBoxAnimation(4)} 6s linear infinite;
  }
`;

import Description from '@components/Description';
import RightSection from '@components/RightSection';
import Title from '@components/Title';
import { css } from '@emotion/react';
import React from 'react';

type Props = {};

const RightContainer = (props: Props) => {
  return (
    <RightSection>
      <Title dividerColor="warning">Previw</Title>
      <Description
        css={css`
          max-height: 70%;
          height: calc(100% - 33px);
        `}
      />
    </RightSection>
  );
};

export default RightContainer;

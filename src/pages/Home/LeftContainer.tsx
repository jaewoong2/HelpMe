import Button from '@components/Button';
import Input from '@components/Input';
import LeftSection from '@components/LeftSection';
import Title from '@components/Title';
import { css } from '@emotion/react';
import React from 'react';

type LeftContainerProps = {};

const LeftContainer: React.FC<LeftContainerProps> = ({}) => {
  return (
    <LeftSection>
      <Title>저는 이런 사람이에요</Title>
      <Input title="이름" />
      <Input title="포지션" />
      <div style={{ display: 'flex', flexDirection: 'column', width: '100%', alignItems: 'flex-start' }}>
        <Input title="" />
        <Input title="" />
        <Button>+ 추가하기</Button>
      </div>
      <Input title="연락처" />
      <Input title="이것 만큼은 보여주고 싶어요" />
      <Title
        css={css`
          margin-top: 30px;
        `}
      >
        저는 이런 사람이에요
      </Title>
      <Input title="인원" />
      <Input title="해당 포지션을 원해요" />
      <Input title="해당 기술 스택을 갖고 있으면 좋아요" />
    </LeftSection>
  );
};

export default LeftContainer;

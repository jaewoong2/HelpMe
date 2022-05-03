import Button from '@components/Button';
import Description from '@components/Description';
import Input from '@components/Input';
import Title from '@components/Title';
import { css } from '@emotion/react';
import React from 'react';

type Props = {};
const App = () => {
  return (
    <main
      style={{
        display: 'flex',
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <div
        style={{
          marginTop: '120px',
          display: 'flex',
          maxWidth: '1248px',
          width: '100%',
          height: '100%',
          maxHeight: '960px',
          padding: '50px',
          justifyContent: 'center',
        }}
      >
        <div style={{ width: '50%', height: '100%' }}>
          <Title>저는 이런 사람이에요</Title>
          <Input title="이름" />
          <Input title="이름" />
          <Button>+ 추가하기</Button>
          <Input title="이름" />
          <Input title="이름" />
          <Title>저는 이런 사람이에요</Title>
          <Input title="이름" />
          <Input title="이름" />
          <Input title="이름" />
          <Input title="이름" />
        </div>
        <section
          style={{
            maxHeight: '960px',
            display: 'flex',
            flexDirection: 'column',
            width: '100%',
            height: '100%',
            marginLeft: '50px',
          }}
        >
          <Title>Previw</Title>
          <Description
            css={css`
              max-height: 70%;
              height: calc(100% - 33px);
            `}
          />
        </section>
      </div>
    </main>
  );
};

export default App;

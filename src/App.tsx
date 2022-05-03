import Button from '@components/Button';
import Description from '@components/Description';
import Input from '@components/Input';
import Title from '@components/Title';
import React from 'react';

type Props = {};
const App = () => {
  return (
    <div
      style={{
        display: 'flex',
        maxWidth: '1248px',
        width: '100%',
        height: '100%',
        padding: '50px',
        border: '1px solid green',
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
      <section style={{ width: '100%', height: '100%', marginLeft: '50px' }}>
        <Title>Previw</Title>
        <Description />
      </section>
    </div>
  );
};

export default App;

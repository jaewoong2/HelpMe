import Button from '@components/Button';
import Input from '@components/input';
import Title from '@components/title';
import React from 'react';

type Props = {};
const App = () => {
  return (
    <div style={{ width: '450px' }}>
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
  );
};

export default App;

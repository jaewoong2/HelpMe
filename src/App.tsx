import styled from '@emotion/styled';
import Home from '@pages/Home';
import React from 'react';

const App = () => {
  return (
    <Main>
      <SectionContainer>
        <Home />
      </SectionContainer>
    </Main>
  );
};

export default App;

const Main = styled.main`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
`;

const SectionContainer = styled.div`
  margin-top: 120px;
  display: flex;
  max-width: 1248px;
  width: 100%;
  height: 100%;
  max-height: 960px;
  padding: 50px;
  justify-content: center;
`;

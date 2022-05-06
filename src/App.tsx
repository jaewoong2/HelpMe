import Loading from '@components/Loading';
import styled from '@emotion/styled';
import Home from '@pages/Home';
import React, { useEffect, useState } from 'react';

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 4500);

    return () => clearTimeout(timer);
  }, [loading]);

  return (
    <Main>
      {loading ? (
        <Loading />
      ) : (
        <SectionContainer>
          <Home />
        </SectionContainer>
      )}
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

  @media screen and (max-width: 874px) {
    max-width: unset;
    max-height: unset;
    padding: unset;
    justify-content: unset;
    margin: unset;

    width: 100%;
    height: unset;
  }
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

  @media screen and (max-width: 874px) {
    max-width: unset;
    max-height: unset;
    padding: unset;
    justify-content: unset;
    margin: unset;

    padding: 40px 0 0 15px;
    width: 100%;
    height: unset;
    flex-direction: column;
  }
`;

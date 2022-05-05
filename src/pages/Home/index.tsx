import { serviceContext } from '@context/serviceContext';
import React, { useContext, useEffect } from 'react';
import LeftContainer from './LeftContainer';
import RightContainer from './RightContainer';

const Home = () => {
  const { user, lookingFor, title } = useContext(serviceContext);

  return (
    <>
      <LeftContainer
        title={title}
        user={{ ...user, title: '저는 이런 사람 이에요' }}
        lookingFor={{ ...lookingFor, title: '이런 사람을 찾고 있어요' }}
      />
      <RightContainer title={title} user={user} lookingFor={lookingFor} />
    </>
  );
};

export default Home;

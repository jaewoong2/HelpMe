import React, { useState } from 'react';
import { createContext } from 'react';
import { serviceContextType } from '../types/service';

const initalState: serviceContextType = {
  user: {
    name: '',
    setName: function (name: string): void {},
    position: ['백엔드'],
    addPosition: function (position: string): void {},
    removePosition: function (index: number): void {},
    contact: ['010-0000-1111'],
    addContact: function (position: string): void {},
    removeContact: function (index: number): void {},
    links: ['github.com'],
    addLinks: function (link: string): void {},
    removeLinks: function (index: number): void {},
  },
  lookingFor: {
    number: 2,
    setNumber: function (number: number): void {},
    position: ['프론트엔드', 'AI'],
    addPosition: function (position: string): void {},
    removePosition: function (index: number): void {},
    techStack: ['React', 'Panads', '이미지 처리'],
    addTechStack: function (tech: string): void {},
    removeTechStack: function (index: number): void {},
  },
};

export const serviceContext = createContext<serviceContextType>(initalState);

export const ServiceProvider: React.FC<{ children: React.ReactElement | React.ReactNode | JSX.Element }> = ({
  children,
}) => {
  const [name, setName] = useState(initalState.user.name);
  const [userPosition, setUserPosition] = useState(initalState.user.position);
  const [contact, setContact] = useState(initalState.user.contact);
  const [links, setLinks] = useState(initalState.user.links);
  const [number, setNumber] = useState(initalState.lookingFor.number);
  const [lookForPosition, setLookForPosition] = useState(initalState.lookingFor.position);
  const [techStack, setTechStack] = useState(initalState.lookingFor.techStack);

  const handleName = (name: string): void => {
    setName(name);
  };
  const addUserPosition = (position: string): void => {
    setUserPosition((prev) => [...prev, position]);
  };
  const removeUserPosition = (index: number): void => {
    setUserPosition((prev) => prev.map((value, i) => (i === index ? '' : value)).filter((v) => !!v));
  };
  const addContact = (contact: string): void => {
    setContact((prev) => [...prev, contact]);
  };
  const removeContact = (index: number): void => {
    setContact((prev) => prev.map((value, i) => (i === index ? '' : value)).filter((v) => !!v));
  };
  const addLinks = (link: string): void => {
    setLinks((prev) => [...prev, link]);
  };
  const removeLinks = (index: number): void => {
    setLinks((prev) => prev.map((value, i) => (i === index ? '' : value)).filter((v) => !!v));
  };
  const handleNumber = (number: number): void => {
    setNumber(number);
  };
  const addLookForPosition = (position: string): void => {
    setLookForPosition((prev) => [...prev, position]);
  };
  const removeLookForPosition = (index: number): void => {
    setLookForPosition((prev) => prev.map((value, i) => (i === index ? '' : value)).filter((v) => !!v));
  };
  const addTechStack = (techStack: string): void => {
    setTechStack((prev) => [...prev, techStack]);
  };
  const removeTechStack = (index: number): void => {
    setTechStack((prev) => prev.map((value, i) => (i === index ? '' : value)).filter((v) => !!v));
  };

  return (
    <serviceContext.Provider
      value={{
        user: {
          name,
          contact,
          links,
          addContact,
          removeContact,
          addLinks,
          removeLinks,
          position: userPosition,
          setName: handleName,
          addPosition: addUserPosition,
          removePosition: removeUserPosition,
        },
        lookingFor: {
          number,
          setNumber: handleNumber,
          position: lookForPosition,
          addPosition: addLookForPosition,
          removePosition: removeLookForPosition,
          techStack,
          addTechStack,
          removeTechStack,
        },
      }}
    >
      {children}
    </serviceContext.Provider>
  );
};

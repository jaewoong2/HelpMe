import React, { useState } from 'react';
import { createContext } from 'react';
import { serviceContextType } from '../types/service';

const initalState: serviceContextType = {
  title: {
    setTitle: (title: string) => {},
  },
  user: {
    setName: function (name: string): void {},
    position: [''],
    setPosition: function (position: string, index: number): void {},
    addPosition: function (): void {},
    removePosition: function (index: number): void {},
    contact: [''],
    setContact: function (position: string, index: number): void {},
    addContact: function (): void {},
    removeContact: function (index: number): void {},
    links: [''],
    addLinks: function (): void {},
    setLinks: function (link, index) {},
    removeLinks: function (index: number): void {},
  },
  lookingFor: {
    setNumber: function (number: number): void {},
    position: [''],
    setPosition: function (position, index) {},
    setTechStack: function (techStack, index) {},
    addPosition: function (): void {},
    removePosition: function (index: number): void {},
    techStack: [''],
    addTechStack: function (): void {},
    removeTechStack: function (index: number): void {},
  },
};

export const serviceContext = createContext<serviceContextType>(initalState);

export const ServiceProvider: React.FC<{ children: React.ReactElement | React.ReactNode | JSX.Element }> = ({
  children,
}) => {
  const [title, setTitle] = useState<string>();
  const [name, setName] = useState<string | undefined>();
  const [userPosition, setUserPosition] = useState(initalState.user.position);
  const [contact, setContact] = useState(initalState.user.contact);
  const [links, setLinks] = useState(initalState.user.links);
  const [number, setNumber] = useState<number | undefined>();
  const [lookForPosition, setLookForPosition] = useState(initalState.lookingFor.position);
  const [techStack, setTechStack] = useState(initalState.lookingFor.techStack);

  const handleTitle = (title: string): void => {
    setTitle(title);
  };

  const handleName = (name: string): void => {
    setName(name);
  };

  const handleUserPosition = (position: string, index: number): void => {
    setUserPosition((prev) => {
      return [...prev.slice(0, index), position, ...prev.slice(index + 1, prev.length)];
    });
  };

  const addUserPosition = (): void => {
    setUserPosition((prev) => [...prev, initalState.user.position[0]]);
  };
  const removeUserPosition = (index: number): void => {
    setUserPosition((prev) => [...prev.slice(0, index), ...prev.slice(index + 1, prev.length)]);
  };

  const handleContact = (contact: string, index: number): void => {
    setContact((prev) => {
      return [...prev.slice(0, index), contact, ...prev.slice(index + 1, prev.length)];
    });
  };

  const addContact = (): void => {
    setContact((prev) => [...prev, initalState.user.contact[0]]);
  };
  const removeContact = (index: number): void => {
    setContact((prev) => [...prev.slice(0, index), ...prev.slice(index + 1, prev.length)]);
  };

  const handleLinks = (link: string, index: number): void => {
    setLinks((prev) => {
      return [...prev.slice(0, index), link, ...prev.slice(index + 1, prev.length)];
    });
  };

  const addLinks = (): void => {
    setLinks((prev) => [...prev, initalState.user.links[0]]);
  };
  const removeLinks = (index: number): void => {
    setLinks((prev) => [...prev.slice(0, index), ...prev.slice(index + 1, prev.length)]);
  };
  const handleNumber = (number: number): void => {
    setNumber(number);
  };

  const handleLookForPosition = (position: string, index: number): void => {
    setLookForPosition((prev) => {
      return [...prev.slice(0, index), position, ...prev.slice(index + 1, prev.length)];
    });
  };

  const addLookForPosition = (): void => {
    setLookForPosition((prev) => [...prev, initalState.lookingFor.position[0]]);
  };
  const removeLookForPosition = (index: number): void => {
    setLookForPosition((prev) => [...prev.slice(0, index), ...prev.slice(index + 1, prev.length)]);
  };

  const handleTechStack = (techStack: string, index: number): void => {
    setTechStack((prev) => {
      return [...prev.slice(0, index), techStack, ...prev.slice(index + 1, prev.length)];
    });
  };

  const addTechStack = (): void => {
    setTechStack((prev) => [...prev, initalState.lookingFor.techStack[0]]);
  };
  const removeTechStack = (index: number): void => {
    setTechStack((prev) => [...prev.slice(0, index), ...prev.slice(index + 1, prev.length)]);
  };

  return (
    <serviceContext.Provider
      value={{
        title: {
          title: title,
          setTitle: handleTitle,
        },
        user: {
          name,
          contact,
          links,
          addContact,
          setContact: handleContact,
          setLinks: handleLinks,
          setPosition: handleUserPosition,
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
          setPosition: handleLookForPosition,
          setTechStack: handleTechStack,
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

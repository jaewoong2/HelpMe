import Description from '@components/Description';
import RightSection from '@components/RightSection';
import Title from '@components/Title';
import { css } from '@emotion/react';
import { serviceContextType } from '../../types/service';
import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import InitialValue from '../../constant/InitialValue';
import Button from '@components/Button';
import styled from '@emotion/styled';
import { TypoGraphy } from '@styles/typo';

type RightContainerProps = serviceContextType;

const getLink = (link: string) => {
  if (link.includes('http') || link.includes('https')) {
    return link;
  }

  return 'https://' + link;
};
const RightContainer: React.FC<RightContainerProps> = ({ title, user, lookingFor }) => {
  const copyValue = useMemo(() => {
    return `${title.title}\n안녕하세요! 소프트웨어 마에스트로 13기 연수생 ${
      user.name
    } 입니다\n저는 본 과정 프로젝트 진행시 이런 포지션을 맡고 싶어요\n${user.position
      .map((position) => `    -${position}\n`)
      .join('')}\n또한, 저에 대한 소개는 아래의 링크를 통해 더욱 자세히 알아 갈 수 있어요\n${user.links
      .map((link) => `    -${link}\n`)
      .join('')}\n저에게는 이러한 포지션을 맡아주실 수 있는 ${
      lookingFor.number
    } 분의 연락이 필요해요\n${lookingFor.position
      .map((position) => `    -${position}\n`)
      .join('')}\n또한, 이러한 기술 스택을 갖고 있으면 해요\n${lookingFor.techStack
      .map((techStack) => `    -${techStack}\n`)
      .join('')}\n아래는 제 연락처 이며, 아래의 연락처를 통해 연락 주시면 감사하겠습니다\n${user.contact
      .map((contact) => `    -${contact}\n`)
      .join('')}\n연락 기다리겠습니다\n소프트웨어 마에스트로 13기 연수생 ${user.name} 드림`;
  }, [
    title.title,
    user.links,
    user.name,
    user.position,
    lookingFor.position,
    lookingFor.number,
    lookingFor.techStack,
    user.contact,
  ]);

  const onClickSaveButton = useCallback(() => {
    navigator.clipboard.writeText(copyValue).then(() => {
      window.alert('저장성공!');
    });
  }, [copyValue]);

  return (
    <RightSection
      css={css`
        position: relative;

        footer {
          width: 100%;
          display: flex;
          justify-content: flex-end;
          margin: 10px 20px;
          ${TypoGraphy.Input};
          color: #8f8f8f;

          @media screen and (max-width: 874px) {
            width: calc(100% - 30px);
            margin: 10px 0;
          }
        }
      `}
    >
      <Title dividerColor="primary">Previw</Title>
      <Description
        className="description"
        css={css`
          overflow-y: scroll;
          max-height: 70%;

          .variable {
            color: #8f8f8f;
          }

          li {
            list-style-type: none;
          }
        `}
      >
        <h4 className={title.title ? '' : 'variable'}>{title.title ?? InitialValue.title.title}</h4>
        <p>
          안녕하세요! 소프트웨어 마에스트로 13기 연수생
          <span className={user.name ? '' : 'variable'}> {user.name ?? InitialValue.user.name} </span>
          입니다
        </p>
        <div>
          저는 본 과정 프로젝트 진행시 이런 포지션을 맡고 싶어요
          <ul>
            {user.position.map((value, i) => (
              <li className={value ? '' : 'variable'}>-{value !== '' ? value : InitialValue.user.position[i % 1]}</li>
            ))}
          </ul>
        </div>
        <div>
          또한, 저에 대한 소개는 아래의 링크를 통해 더욱 자세히 알아 갈 수 있어요
          <ul>
            {user.links.map((value, i) => (
              <li>
                <a
                  className={value ? '' : 'variable'}
                  target="_blank"
                  href={getLink(value ?? InitialValue.user.links[0])}
                >
                  -{value !== '' ? value : InitialValue.user.links[i % 1]}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <p>
          저에게는 이러한 포지션을 맡아주실 수 있는{' '}
          <span className={lookingFor.number ? '' : 'variable'}>
            {lookingFor.number ?? InitialValue.lookingFor.number}
          </span>
          분의 연락이 필요해요
        </p>
        <div>
          <ul>
            {lookingFor.position.map((value, i) => (
              <li className={value ? '' : 'variable'}>
                -{value !== '' ? value : InitialValue.lookingFor.position[i % 2]}
              </li>
            ))}
          </ul>
        </div>
        <div>
          또한, 이러한 기술스택을 갖고 있으면 해요
          <ul>
            {lookingFor.techStack.map((value, i) => (
              <li className={value ? '' : 'variable'}>
                -{value !== '' ? value : InitialValue.lookingFor.techStack[i % 3]}
              </li>
            ))}
          </ul>
        </div>
        <div>
          아래는 제 연락처 이며, 아래의 연락처를 통해 연락 주시면 감사하겠습니다
          <ul>
            {user.contact.map((value, i) => (
              <li className={value ? '' : 'variable'}>-{value !== '' ? value : InitialValue.user.contact[i % 1]}</li>
            ))}
          </ul>
          연락 기다리겠습니다.
        </div>
        <p>
          소프트웨어 마에스트로 13기 연수생{' '}
          <span className={user.name ? '' : 'variable'}>{user.name !== '' ? user.name : InitialValue.user.name} </span>
          드림
        </p>
        <TextArea readOnly={true} value={copyValue}></TextArea>
      </Description>
      <Button
        className="save-btn"
        onClick={onClickSaveButton}
        css={css`
          width: 100px;
          position: absolute;
          top: 70%;
          left: calc(100% - 80px);
          background-color: #eee;
          border-radius: 20px;

          &:hover {
            background-color: #a7b6f7ae;
            transition: background-color 0.1s ease;
          }
          transition: background-color 0.1s ease;
        `}
      >
        저장하기
      </Button>
      <footer>Created By @Jaewoong2</footer>
    </RightSection>
  );
};

export default RightContainer;

export const TextArea = styled.textarea`
  width: 0;
  height: 0;
  opacity: 0;
  transform: translate(-100%, -100%);
  position: fixed;
`;

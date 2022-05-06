import Button from '@components/Button';
import Input from '@components/Input';
import LeftSection from '@components/LeftSection';
import Title from '@components/Title';
import { serviceContextType } from '../../types/service';
import React from 'react';
import styled from '@emotion/styled';
import InitialValue from '../../constant/InitialValue';
import { css } from '@emotion/react';

type LeftContainerProps = {
  title: serviceContextType['title'];
  user: serviceContextType['user'] & {
    title: string;
  };
  lookingFor: serviceContextType['lookingFor'] & {
    title: string;
  };
};

const LeftContainer: React.FC<LeftContainerProps> = ({ title, user, lookingFor }) => {
  return (
    <LeftSection>
      <Title>제목을 입력해주세요</Title>
      <Input
        value={title?.title}
        onChange={(e) => title?.setTitle(e.target.value)}
        placeholder={InitialValue.title.title}
      />
      <Title
        css={css`
          margin-top: 20px;
        `}
      >
        {user?.title}
      </Title>
      <Input title="이름" placeholder={InitialValue.user?.name} onChange={(e) => user?.setName(e.target.value)} />
      <InputWrapper>
        {user?.position?.map((value, i) => (
          <>
            <Input
              key={'position' + `--${i}`}
              value={value === '' ? '' : value}
              onChange={(e) => user.setPosition(e.target.value, i)}
              title={i === 0 ? '포지션' : ''}
              placeholder={InitialValue.user.position[i % 1]}
            />
            <DeleteButton onClick={() => user.removePosition(i)} hasValue={Boolean(value)}>
              삭제하기
            </DeleteButton>
          </>
        ))}
        <Button onClick={user?.addPosition}>+ 추가하기</Button>
      </InputWrapper>
      <InputWrapper>
        {user?.contact?.map((value, i) => (
          <>
            <Input
              value={value}
              onChange={(e) => user.setContact(e.target.value, i)}
              key={'contact' + `--${i}`}
              title={i === 0 ? '연락처' : ''}
              placeholder={InitialValue.user.contact[i % 1]}
            />
            <DeleteButton onClick={() => user.removeContact(i)} hasValue={Boolean(value)}>
              삭제하기
            </DeleteButton>
          </>
        ))}
        <Button onClick={user?.addContact}>+ 추가하기</Button>
      </InputWrapper>
      <InputWrapper>
        {user?.links?.map((value, i) => (
          <>
            <Input
              value={value}
              onChange={(e) => user.setLinks(e.target.value, i)}
              key={'link' + `--${i}`}
              title={i === 0 ? '이것 만큼은 보여주고 싶어요' : ''}
              placeholder={InitialValue.user.links[i % 1]}
            />
            <DeleteButton onClick={() => user.removeLinks(i)} hasValue={Boolean(value)}>
              삭제하기
            </DeleteButton>
          </>
        ))}
        <Button onClick={user?.addLinks}>+ 추가하기</Button>
      </InputWrapper>
      <Title
        css={css`
          margin-top: 20px;
        `}
      >
        {lookingFor?.title}
      </Title>
      <Input
        type="number"
        onChange={(e) => lookingFor?.setNumber(+e.target.value)}
        title="인원"
        placeholder={InitialValue.lookingFor.number.toString()}
      />
      <InputWrapper>
        {lookingFor?.position?.map((value, i) => (
          <>
            <Input
              value={value}
              onChange={(e) => lookingFor.setPosition(e.target.value, i)}
              key={'position' + `--${i}`}
              title={i === 0 ? '해당 포지션을 원해요' : ''}
              placeholder={InitialValue.lookingFor.position[i % 2]}
            />
            <DeleteButton onClick={() => lookingFor.removePosition(i)} hasValue={Boolean(value)}>
              삭제하기
            </DeleteButton>
          </>
        ))}
        <Button onClick={lookingFor?.addPosition}>+ 추가하기</Button>
      </InputWrapper>
      <InputWrapper>
        {lookingFor?.techStack?.map((value, i) => (
          <>
            <Input
              value={value}
              onChange={(e) => lookingFor.setTechStack(e.target.value, i)}
              key={'stack' + `--${i}`}
              title={i === 0 ? '해당 기술 스택을 갖고 있으면 좋아요' : ''}
              placeholder={InitialValue.lookingFor.techStack[i % 3]}
            />
            <DeleteButton onClick={() => lookingFor.removeTechStack(i)} hasValue={Boolean(value)}>
              삭제하기
            </DeleteButton>
          </>
        ))}
        <Button onClick={lookingFor?.addTechStack}>+ 추가하기</Button>
      </InputWrapper>
    </LeftSection>
  );
};

export default LeftContainer;

const DeleteButton = styled(Button)<{ hasValue: boolean }>`
  display: ${({ hasValue }) => (hasValue ? 'block' : 'none')};
  width: 50px;
  color: ${({ theme }) => theme.color.divderWarnBg};
  font-size: 12px;
  margin: 8px 0 10px 0;
  padding: 0 0 0 0;
  margin-left: calc(100% - 50px);
`;

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: flex-start;

  label:focus-within + button,
  label:active + button {
    display: block;
  }
`;

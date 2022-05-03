import { SerializedStyles } from '@emotion/react';
import styled from '@emotion/styled';

const Title = styled.div<{ css: SerializedStyles | undefined }>`
  width: 100%;
  position: relative;
  margin-block: 0;
  margin-inline: 0;
  font-weight: 800;
  font-size: 24px;
  margin-bottom: 20px;

  &::after {
    content: '';
    position: absolute;
    left: 0;
    top: calc(100% + 5px);
    width: 25%;
    height: 5px;
    background-color: ${({ theme }) => theme.color.borderBg};
  }
  ${({ css }) => css};
`;

export { Title };

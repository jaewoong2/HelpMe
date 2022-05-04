import { SerializedStyles, Theme } from '@emotion/react';
import styled from '@emotion/styled';
import { TypoGraphy } from '@styles/typo';

type DivderColor = 'primary' | 'warning' | 'normal';

const getDividerColor = (theme: Theme, divder: DivderColor) => {
  switch (divder) {
    case 'normal':
      return theme.color.dividierBg;
    case 'primary':
      return theme.color.dividerPrimaryBg;
    case 'warning':
      return theme.color.divderWarnBg;
  }
};

const Title = styled.div<{
  css: SerializedStyles | undefined;
  dividerColor: DivderColor;
}>`
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
    max-width: 75px;
    height: 5px;
    background-color: ${({ theme, dividerColor }) => getDividerColor(theme, dividerColor)};
  }
  ${({ css }) => css};
  ${TypoGraphy.Title};
`;

export { Title };

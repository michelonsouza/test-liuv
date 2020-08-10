import styled, { css } from 'styled-components';

interface ContainerProps {
  variant: 'primary' | 'success' | 'warning';
  hasIcon?: boolean;
}

export const Container = styled.button<ContainerProps>`
  ${({ theme, hasIcon, variant }) => css`
    justify-content: ${hasIcon ? 'space-between' : 'center'};
    background: ${theme.colors[variant]};
    border-radius: ${theme.metrics.baseRadius}px;
    height: ${theme.metrics.baseHeight}px;
    color: ${theme.colors[variant !== 'warning' ? 'whiteText' : 'text']};
    font-weight: bold;
    font-size: 1rem;
    width: 100%;
    border: 0;
    display: flex;
    align-items: center;

    &:hover {
      opacity: 0.9;
    }
  `}
`;

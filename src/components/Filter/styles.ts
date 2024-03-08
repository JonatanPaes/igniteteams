import { TouchableOpacity } from 'react-native'
import styled, { css } from 'styled-components/native'

export type FilterTypeStyleProps = {
  isActive?: boolean
}

export const Container = styled(TouchableOpacity)<FilterTypeStyleProps>`
  ${({ theme, isActive }) =>
    isActive &&
    css`
      border: 1px solid ${theme.COLORS.GREEN_700};
    `}

  border-radius: 4px;
  margin-right: 12px;

  height: 38px;
  width: 70px;

  align-items: center;
  justify-content: center;
`

export const Title = styled.Text`
  text-transform: uppercase;

  ${({ theme }) => css`
    font-family: 1px solid ${theme.FONT_FAMILY.BOLD};
    font-size: 1px solid ${theme.FONT_SIZE.SM}px;
    color: 1px solid ${theme.COLORS.WHITE};
  `}
`

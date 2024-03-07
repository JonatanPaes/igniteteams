import { TouchableOpacityProps } from 'react-native'

import { ButtonIconTypeStyleProps, Container, Icon } from './styles'

type ButtonIconProps = TouchableOpacityProps & {
  type?: ButtonIconTypeStyleProps
}

export function ButtonIcon({ type = 'PRIMARY', ...rest }: ButtonIconProps) {
  return (
    <Container {...rest}>
      <Icon name="home" type={type} />
    </Container>
  )
}

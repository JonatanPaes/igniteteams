import { TouchableOpacityProps } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'

import { ButtonIconTypeStyleProps, Container, Icon } from './styles'

type ButtonIconProps = TouchableOpacityProps & {
  type?: ButtonIconTypeStyleProps
  icon: keyof typeof MaterialIcons.glyphMap
}

export function ButtonIcon({ type = 'PRIMARY', icon, ...rest }: ButtonIconProps) {
  return (
    <Container {...rest}>
      <Icon name={icon} type={type} />
    </Container>
  )
}

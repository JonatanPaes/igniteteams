import { ButtonIcon } from '..'
import { Container, Icon, Name } from './styles'

type PlayerCardProps = {
  name: string
  onRemove: () => void
}

export function PlayerCard({ name, onRemove }: PlayerCardProps) {
  return (
    <Container>
      <Icon name="person" />

      <Name>{name}</Name>

      <ButtonIcon onPress={onRemove} icon="close" type="SECONDARY" />
    </Container>
  )
}

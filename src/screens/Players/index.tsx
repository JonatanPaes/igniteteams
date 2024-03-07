import { Header, Highlight } from '@components/index'

import { Container } from './styles'

export function Players() {
  return (
    <Container>
      <Header showBackButton />

      <Highlight title="Nova turma" subTitle="Adicione a galera e separe os times" />
    </Container>
  )
}

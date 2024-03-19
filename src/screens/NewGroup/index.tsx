import { useNavigation } from '@react-navigation/native'

import { Button, Header, Highlight, Input } from '@components/index'

import { Container, Content, Icon } from './styles'

export function NewGroup() {
  const { navigate } = useNavigation()

  function handleNew() {
    navigate('players', { group: 'Novo Grupo' })
  }
  return (
    <Container>
      <Header showBackButton />

      <Content>
        <Icon />

        <Highlight title="Nova turma" subTitle="Crie a turma para adicionar as pessoas" />

        <Input placeholder="Nome da turma" />

        <Button title="Criar" style={{ marginTop: 20 }} onPress={handleNew} />
      </Content>
    </Container>
  )
}

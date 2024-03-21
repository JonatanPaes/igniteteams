import { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { groupCreate } from '@storage/group/groupCreate'

import { Button, Header, Highlight, Input } from '@components/index'

import { Container, Content, Icon } from './styles'

export function NewGroup() {
  const [group, setGroup] = useState('')

  const { navigate } = useNavigation()

  async function handleNew() {
    try {
      await groupCreate(group)
      navigate('players', { group })
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <Container>
      <Header showBackButton />

      <Content>
        <Icon />

        <Highlight title="Nova turma" subTitle="Crie a turma para adicionar as pessoas" />

        <Input placeholder="Nome da turma" onChangeText={setGroup} />

        <Button title="Criar" style={{ marginTop: 20 }} onPress={handleNew} />
      </Content>
    </Container>
  )
}

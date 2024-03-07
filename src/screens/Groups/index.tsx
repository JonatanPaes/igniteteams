import { useState } from 'react'
import { FlatList } from 'react-native'

import { Button, GroupCard, Header, Highlight, ListEmpty } from '@components/index'

import { Container } from './styles'

export function Groups() {
  const [groups, setGroups] = useState<string[]>([])

  return (
    <Container>
      <Header />

      <Highlight title="Turmas" subTitle="jogue com a sua turma" />

      <FlatList
        data={groups}
        keyExtractor={(item) => item}
        renderItem={({ item }) => <GroupCard title={item} />}
        contentContainerStyle={groups.length === 0 && { flex: 1 }}
        ListEmptyComponent={() => <ListEmpty message="Que tal cadastrar a primeira turma?" />}
      />

      <Button title="Criar nova turma" />
    </Container>
  )
}

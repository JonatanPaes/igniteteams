import { GroupCard } from '@components/GroupCard'
import { Header } from '@components/Header'
import { Highlight } from '@components/Highlight'
import { useState } from 'react'
import { FlatList } from 'react-native'

import { Container } from './styles'

export function Groups() {
  const [groups, setGroups] = useState<string[]>(['Galera da Faculdade', 'Amigos', 'Dota 2'])

  return (
    <Container>
      <Header />

      <Highlight title="Turmas" subTitle="jogue com a sua turma" />

      <FlatList
        data={groups}
        keyExtractor={(item) => item}
        renderItem={({ item }) => <GroupCard title={item} />}
      />
    </Container>
  )
}

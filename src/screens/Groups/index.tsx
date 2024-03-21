import { useCallback, useState } from 'react'
import { FlatList } from 'react-native'
import { useFocusEffect, useNavigation } from '@react-navigation/native'
import { groupsGetAll } from '@storage/group/groupsGetAll'

import { Button, GroupCard, Header, Highlight, ListEmpty } from '@components/index'

import { Container } from './styles'

export function Groups() {
  const [groups, setGroups] = useState<string[]>([])

  const { navigate } = useNavigation()

  function handleNewGroup() {
    navigate('new')
  }

  async function getGroups() {
    try {
      const data = await groupsGetAll()

      setGroups(data)
    } catch (error) {
      console.log(error)
    }
  }

  useFocusEffect(
    useCallback(() => {
      getGroups()
    }, [])
  )

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

      <Button title="Criar nova turma" onPress={handleNewGroup} />
    </Container>
  )
}

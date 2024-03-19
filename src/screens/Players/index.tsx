import { useState } from 'react'
import { FlatList } from 'react-native'
import { useRoute } from '@react-navigation/native'

import {
  Button,
  ButtonIcon,
  Filter,
  Header,
  Highlight,
  Input,
  ListEmpty,
  PlayerCard
} from '@components/index'

import { Container, Form, HeaderList, NumbersOfPlayers } from './styles'

type RouteParams = {
  group: string
}

export function Players() {
  const [team, setTeam] = useState('Time A')
  const [players, setPlayers] = useState(['Jonatán'])

  const { params } = useRoute()
  const { group } = params as RouteParams

  return (
    <Container>
      <Header showBackButton />

      <Highlight title={group} subTitle="Adicione a galera e separe os times" />

      <Form>
        <Input placeholder="Nome da pessoa" autoCorrect={false} />

        <ButtonIcon icon="add" />
      </Form>

      <HeaderList>
        <FlatList
          data={['Time A', 'Time B']}
          keyExtractor={(item) => item}
          renderItem={({ item }) => (
            <Filter title={item} isActive={item === team} onPress={() => setTeam(item)} />
          )}
          horizontal
        />

        <NumbersOfPlayers>{players.length}</NumbersOfPlayers>
      </HeaderList>

      <FlatList
        data={players}
        keyExtractor={(item) => item}
        renderItem={({ item }) => <PlayerCard name={item} onRemove={() => {}} />}
        ListEmptyComponent={() => <ListEmpty message="Não há pessoas nesse time." />}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={[{ paddingBottom: 100 }, players.length === 0 && { flex: 1 }]}
      />

      <Button title="Remover turma" type="SECONDARY" />
    </Container>
  )
}

import { useState } from 'react'
import { FlatList } from 'react-native'

import { ButtonIcon, Filter, Header, Highlight, Input, PlayerCard } from '@components/index'

import { Container, Form, HeaderList, NumbersOfPlayers } from './styles'

export function Players() {
  const [team, setTeam] = useState('Time A')
  const [players, setPlayers] = useState(['Jonatán'])

  return (
    <Container>
      <Header showBackButton />

      <Highlight title="Nova turma" subTitle="Adicione a galera e separe os times" />

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
      />
    </Container>
  )
}

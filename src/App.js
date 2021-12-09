import React, { } from 'react'
import AppBar from './components/common/AppBar';
import { Container, Stack } from '@mui/material';
import WordInputs from './components/WordInputs';
import WordList from './components/WordList';
export default function App() {
  return (
    <div className="container" >
      <AppBar />
      <Container maxWidth="md">
        <Stack direction="column" justifyContent="center" alignItems="center" spacing={2}>
          <WordInputs />
          <WordList />
        </Stack>
      </Container>
    </div>
  )
}

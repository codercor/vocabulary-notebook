import React, { useState } from 'react'
import AppBar from './components/common/AppBar';
import { Container, Stack, Box, TextField, Grid, Button, List, ListItem, Typography } from '@mui/material';
import SwapHorizontalCircleOutlinedIcon from '@mui/icons-material/SwapHorizontalCircleOutlined';
import WordCard from './features/WordCard';
export default function App() {
  return (
    <div className="container" >
      <AppBar />
      <Container maxWidth="md">
        <Stack
          direction="column"
          justifyContent="center"
          alignItems="center"
          spacing={2}
        >
          <Box mt={5} width="100%">
            <Grid container spacing={2}>
              <Grid item md={5} xs={12}>
                <TextField fullWidth label="Türkçe" variant="outlined" />
              </Grid>
              <Grid justifyContent="center"
                alignItems="center" item container md={2} xs={12}>
                <SwapHorizontalCircleOutlinedIcon fontSize="large" />
              </Grid>
              <Grid item md={5} xs={12}>
                <TextField fullWidth label="English" variant="outlined" />
              </Grid>
              <Grid item md={3} xs={0} />
              <Grid item md={6} xs={12}>

                <Button fullWidth variant="outlined" color="primary"> Add To NoteBook </Button>
              </Grid>
            </Grid>
          </Box>
          <Box mt={5} width="100%">
            <Grid container spacing={2}>
              <Grid item md={4} xs={12}>
                <TextField fullWidth size="small" label="Search..." variant="filled" />
              </Grid>
              <Grid item md={12} xs={12}>
                <List sx={{
                  width: '100%',
                  overflow: 'auto',
                  maxHeight: 500,
                  '& ul': { padding: 0 },
                }}
                  subheader={<li />} >
                  {new Array(50)
                    .fill(<ListItem sx={{
                      width: '100% !important',
                    }}>
                      <WordCard/>
                    </ListItem>)
                  }
                </List>
              </Grid>
            </Grid>
          </Box>
        </Stack>
      </Container>
    </div>
  )
}

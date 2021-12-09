import React, { useEffect } from 'react'
import { Box, TextField, Grid, List, ListItem } from '@mui/material';
import WordCard from '../WordCard/';
import { useSelector } from 'react-redux';
export default function WordList() {
    const words = useSelector(state => state.words);

    return (
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
                        {words.map((item) => (
                            <ListItem key={item.id} sx={{ width: '100% !important' }}>
                                <WordCard word={item.word} translation={item.translation} />
                            </ListItem>))
                        }
                    </List>
                </Grid>
            </Grid>
        </Box>
    )
}

import { Stack } from '@mui/material';
import WordInputs from '../components/WordInputs';
import WordList from '../components/WordList';
const Application = () => <Stack direction="column" justifyContent="center" alignItems="center" spacing={2}>
    <WordInputs />
    <WordList />
</Stack>
export default Application;
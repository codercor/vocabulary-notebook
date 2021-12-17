import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { TextField } from '@mui/material';
import { updateWord } from '../../app/Slices/WordsSlice';
import { useDispatch } from 'react-redux';

export default function AlertDialog({open,cancel,confirm,data}) {
    const [word, setWord] = React.useState(data.word);
    const [translation, setTranslation] = React.useState(data.translation);
    const dispatch = useDispatch();
  return (
    <div>
      <Dialog
        open={open}
        onClose={cancel}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          Update Word
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            <TextField fullWidth size="small" value={word} onChange={(e)=>{setWord(e.target.value)}} label="Word"  variant="filled" />
            <TextField fullWidth size="small" value={translation}  onChange={(e)=>{setTranslation(e.target.value)}} label="Translation" variant="filled" />
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button variant="outlined" color="warning" onClick={cancel}>Cancel</Button>
          <Button variant="contained" color="success" onClick={()=>{
                dispatch(updateWord({id:data.id,word,translation}));
                confirm();
          }} autoFocus>
            Update
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
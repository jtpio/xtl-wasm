import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Box from '@material-ui/core/Box';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import GitHub from './GitHub';

let mod: xtl;
createModule().then(res => {
  mod = res;
});

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      '& .MuiTextField-root': {
        margin: theme.spacing(1),
        width: '100%'
      }
    }
  })
);

function MultilineTextFields() {
  const classes = useStyles();
  const [seed, setSeed] = React.useState(0);
  const [text, setText] = React.useState('');
  const [result, setResult] = React.useState(0);

  const handleSeed = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setSeed(parseInt(value, 10));
  };

  const handleText = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setText(value);
  };

  React.useEffect(() => {
    try {
      const h = mod?.murmur2(text, seed) ?? '';
      setResult(h);
    } catch (e) {
      setResult(e);
    }
  }, [seed, text]);

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <div>
        <TextField
          id="seed"
          label="Seed"
          placeholder={'12345'}
          type="number"
          InputLabelProps={{
            shrink: true
          }}
          onChange={handleSeed}
          variant="outlined"
        />
      </div>
      <div>
        <TextField
          id="input-string"
          label="Input"
          placeholder="Input"
          multiline
          onChange={handleText}
          variant="outlined"
        />
      </div>
      <div>
        <TextField
          InputProps={{
            readOnly: true
          }}
          id="result"
          label="Result"
          variant="outlined"
          value={result}
        />
      </div>
    </form>
  );
}

export default function App() {
  return (
    <Container maxWidth="sm">
      <Box my={1}>
        <Typography variant="h4" component="h1" gutterBottom>
         xtl-wasm - murmur2_x86
        </Typography>
        <MultilineTextFields />
        <GitHub />
      </Box>
    </Container>
  );
}

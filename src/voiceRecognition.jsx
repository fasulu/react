import React from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

import { Button, Container, Grid, Paper, TextField } from '@mui/material/';

const VoiceRecognition = () => {
  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition
  } = useSpeechRecognition();

  const paperStyle = { padding: 20, height: '60vh', margin: '50px auto' }
  const gridStyle = { padding: 10 }
  const startStyle = { background: 'green', color: 'white', marginRight: 15 }
  const stopStyle = { background: '#c51111', color: 'white', marginRight: 15 }
  const resetStyle = { background: '#e39313', color: 'white', marginRight: 15 }
  const textfieldStyle = { marginRight: 20, marginTop: 10, minWidth: 350 }


  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>;
  }

  return (
    <>

      <Container maxWidth='xs'>
        <Paper elevation={5} style={paperStyle}>
          <Grid align='center' style={gridStyle}>

            <Grid align='center' style={gridStyle}>

              <h2>Voice Recognition: {listening ? 'On' : 'Off'}</h2>

            </Grid>

          </Grid>

          <Grid align='right' style={gridStyle}>

            <TextField style={textfieldStyle} id="speechId"
              type="text" label="Speech Recognized" title="Speech Recognized"
              variant="outlined" value={transcript}
              placeholder="" multiline minRows={8} maxRows={8}
            />

            <Grid align='right' style={gridStyle}>

              <Button style={startStyle} title="Start"
                onClick={SpeechRecognition.startListening}>Start</Button>

              <Button style={stopStyle} title="Stop" type="submit"
                onClick={SpeechRecognition.stopListening}>Stop</Button>

              <Button style={resetStyle} title="Reset" type="submit"
                onClick={resetTranscript}>Reset</Button>

            </Grid>
          </Grid>
        </Paper>
      </Container>

    </>
  );
};
export default VoiceRecognition;
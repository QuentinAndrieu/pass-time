import React from 'react';
import TeamList from './TeamList.js';
import GuessChat from './GuessChat.js';
import Webcam from 'react-webcam';
import {
  Paper,
  Grid,
  Container,
  AppBar,
  Toolbar,
  Typography,
  withStyles,
} from '@material-ui/core';

const styles = (theme) => ({
  root: {
    flexGrow: 1,
    marginTop: theme.spacing(1),
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    elevation: 3,
    height: '500px',
  },
  title: {
    flexGrow: 1,
  },
});

class Main extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <Container maxWidth="xl">
        <AppBar color="secondary" position="static">
          <Toolbar>
            <Typography variant="h6" className={classes.title}>
              Time's up Cooperl
            </Typography>
          </Toolbar>
        </AppBar>

        <div className={classes.root}>
          <Grid container spacing={1}>
            <Grid item xs={3}>
              <Paper className={classes.paper}>
                <TeamList />
              </Paper>
            </Grid>
            <Grid item xs={6}>
              <Paper className={classes.paper}>
                <Webcam />
              </Paper>
            </Grid>

            <Grid item xs={3}>
              <Paper className={classes.paper}>
                <GuessChat />
              </Paper>
            </Grid>
          </Grid>
        </div>
      </Container>
    );
  }
}

export default withStyles(styles)(Main);

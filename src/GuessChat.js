import React from 'react';
import {
  Paper,
  TextField,
  withStyles,
  List,
  ListItem,
  ListItemText,
} from '@material-ui/core';

const styles = (theme) => ({
  chat: {
    height: '450px',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: '95%',
    height: '50px',
  },
  list: {
    position: 'relative',
    overflow: 'auto',
    maxHeight: '440px',
  },
});

class GuessChat extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      guessedWords: [],
      guessedWord: '',
    };
  }

  proposeWord = (event) => {
    if (event.key === 'Enter') {
      const guessedWords = this.state.guessedWords;
      guessedWords.push(event.target.value);

      this.setState({
        guessedWords,
        guessWord: '',
      });
    }
  };

  setStateGuessWord = (event) => {
    this.setState({
      guessWord: event.target.value,
    });
  };

  render() {
    const { classes } = this.props;

    return (
      <div>
        <Paper className={classes.chat}>
          <List className={classes.list} subheader={<li />}>
            {this.state.guessedWords.map((item) => (
              <ListItem key={`item-${item}`}>
                <ListItemText primary={`${item}`} />
              </ListItem>
            ))}
          </List>
        </Paper>

        <TextField
          id="standard-full-width"
          style={{ margin: 8 }}
          placeholder="Guess The Word !!"
          className={classes.textField}
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          onKeyDown={this.proposeWord}
          value={this.state.guessWord}
          onChange={this.setStateGuessWord}
        />
      </div>
    );
  }
}

export default withStyles(styles)(GuessChat);

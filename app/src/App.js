import React, { useEffect } from 'react';
import './App.css';
import BBCharacters from './components/BBCharacters'
import { connect } from 'react-redux'
import { fetchCharacter } from "./store/actions";


function App({ fetchCharacter, loadingCharacter, errorMessage }) {

  useEffect(() => {
    fetchCharacter();
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <h1>Breaking Bad Characters</h1>
        {!loadingCharacter ? <BBCharacters /> : <div>... Fetching characters</div>}
        {errorMessage !== "" ? <div>{errorMessage}</div> : null}
      </header>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    loadingCharacter: state.loadingCharacter,
    errorMessage: state.errorMessage
  };
}

export default connect(mapStateToProps, { fetchCharacter })(App);
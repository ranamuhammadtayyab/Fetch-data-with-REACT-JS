import React from 'react';
import './App.css';
import { Provider, connect } from 'react-redux';
import {addAction,subtractAction}from './_actions/_action';
import {store} from './_store/_store';
// mapStateToProps
const mapStateToProps = (state => {
  return {
      number: state.math.number,
  };
});
// mapDispatchToProps
const mapDispatchToProps = dispatch => ({
  add: () => dispatch(addAction()),
  subtract: () => dispatch(subtractAction()),
});

    const Counter = (props) => (
      <div>
          <h2>Counter: {props.number}</h2>
          <input type='button' value='add' onClick={props.add} />
          <input type='button' value='subtract' onClick={props.subtract} />
      </div>
  );
  const ConnectedCounter = connect(mapStateToProps, mapDispatchToProps)(Counter);
  const App = () => (
      <Provider store={store}>
          <ConnectedCounter />
      </Provider>
  )

export default App;

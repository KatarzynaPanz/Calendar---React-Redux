import React from 'react';
import { Provider } from "react-redux";

import Calendar from "./components/Calendar";

class App extends React.Component {
  render() {
    const { store } = this.props;
    return (
      <Provider store={store}>
        <Calendar />
      </Provider>
    );
  }
}

export default App;
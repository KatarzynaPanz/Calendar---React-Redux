import React from 'react';
import { Provider } from "react-redux";
import ResetStyle from "./style/Reset";
import GlobalStyle from "./style/Global";

import Calendar from "./components/Calendar";

class App extends React.Component {
  render() {
    const { store } = this.props;
    return (
      <>
        <ResetStyle />
        <GlobalStyle />
        <Provider store={store}>
          <Calendar />
        </Provider>
      </>
    );
  }
}

export default App;
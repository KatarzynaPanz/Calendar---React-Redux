import React from 'react';
import { createRoot } from 'react-dom/client';
import { createStore } from "redux";
import reducer from "./reducers";
import { composeWithDevTools } from "redux-devtools-extension";

import App from "./App";

const store = createStore(reducer, composeWithDevTools());

const root = createRoot(document.querySelector("#root"));
root.render(<App store={store} />);

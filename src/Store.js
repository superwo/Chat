import React from 'react';

export const CTX = React.createContext();

/*
  msg {
    from: 'User'
    msg: 'hi'
    topic: 'general'
  }

  state {
    topic1: [
      {msg}, {msg}, {msg}, {newmsg}
    ]
    topic2: []
  }
*/

const initState = {
  general: [
    { from: 'aaron', msg: 'hello' },
    { from: 'arnold', msg: 'hello' },
    { from: 'archer', msg: 'hello' }
  ],
  topic2: [
    { from: 'turbo', msg: 'hello' },
    { from: 'super', msg: 'hello' },
    { from: 'archer', msg: 'hello' }
  ]
};

function reducer(state, action) {
  const { from, msg, topic } = action.payload;
  switch (action.type) {
    case 'RECEIVE_MESSAGE':
      return {
        ...state,
        [topic]: [...state[topic], { from, msg }]
      };
    default:
      return state;
  }
}

export default function Store(props) {
  const reducerHook = React.useReducer(reducer, initState);

  return <CTX.Provider value={reducerHook}>{props.children}</CTX.Provider>;
}

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux'
import { combineReducers, createStore } from 'redux';




let stanData = [
  {
    id: 0,
    name: '멋진신발',
    quan: 2000,
  },
  {
    id: 1,
    name: '예쁜신발',
    quan: 2500,
  }
]

let alert초기값 = true;

function reducer2(state = alert초기값, action) {
  if (action.type === '닫힘') {
    let copy = alert초기값;
    copy = false;
    return copy
  }
  else if (action.type === '열림') {
    let copy = alert초기값;
    copy = true;
    return copy
  }
  else{
    return state;
  }
}


function reducer(state = stanData, action) {
  if (action.countChange === '수량증가') {
    // 데이터 수정 조건
    let copy = [...stanData];
    copy[0].id++;

    return copy
  }
  else if (action.countChange === '수량감소') {
    let copy = [...stanData];
    copy[0].id--;

    return copy
  }
  else {
    return state
  }
}

let store = createStore(combineReducers({ reducer, reducer2 }))

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

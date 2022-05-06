import React, { useState } from 'react';
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
    quan: 1,
  },
  {
    id: 1,
    name: '예쁜신발',
    quan: 1,
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

  if ( action.type === '항목추가') {
    let found = state.findIndex((e) => {
      return e.id === action.payload.id
      // stanData id 값 검색해서
      // 항목 추가한 action.payload.id 즉 인덱스값을 가져온다.
      // 0 이라는 아이디가 있다?
      // quan 검색해야하는거아닌가?
      // 그래 같은 아이디 있는지 없는지 찾았어 
    })
    if(found >= 0){
      let copy = [...state]
      copy[found].quan++;
      stanData = [...copy]
      return copy
      
    } else{
      let copy = [...state]
      copy.push(action.payload);
      stanData = [...copy]
      return copy
    }
    
  }

  if (action.type === '수량증가') {
    // 데이터 수정 조건

    let copy = [...stanData];

    copy[action.데이터].quan++;

    return copy
  }
  else if (action.type === '수량감소') {
    let copy = [...stanData];
    copy[action.데이터].quan--;

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

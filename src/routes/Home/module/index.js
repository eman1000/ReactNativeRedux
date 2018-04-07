//LIBRARIES
import update from "immutability-helper";
import constants from "./actionConstants";
const {
  CHANGE_NAME
} = constants;

//ACTION CREATORS

//change name
export function changeName(payload){
  return {
    type:CHANGE_NAME,
    payload
  };
}

//ACTION HANDLERS

//handle name change
function handleChangeName(state, action){
  return update(state, {
    name:{
      $set:action.payload
    }
  });
}

const ACTION_HANDLERS = {
  CHANGE_NAME:handleChangeName
};

const initialState = {
  name:"John"
};

export function HomeReducer (state = initialState, action){
  const handler = ACTION_HANDLERS[action.type];
  return handler ? handler(state, action) : state;
}
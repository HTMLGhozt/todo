import axios from 'axios';

export const ADD_TODO = 'ADD_TODO';
export const GET_TODOS = 'GET_TODOS';
export const UPDATE_TODO = 'UPDATE_TODO';

const url = 'http://localhost:5000/api';

export const addTodo = async (
  dispatch,
  { text, completed = false },
) => {
  await axios.post(`${url}/todos`, { text, completed });
  getTodos(dispatch);
};

export const getTodos = async dispatch => {
  const { data } = await axios.get(`${url}/todos`);

  dispatch({
    data,
    type: GET_TODOS,
  });
};

export const updateTodo = async (
  dispatch,
  { text, completed, $loki: id },
) => {
  await axios.put(`${url}/todos/${id}`, { text, completed });
  getTodos(dispatch);
};

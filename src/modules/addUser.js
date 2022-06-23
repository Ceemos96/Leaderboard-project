import { url } from './getUsers.js';
import renderUsers from './renderUsers.js';

const userName = document.getElementById('user-name');
const userScore = document.getElementById('user-score');

const addUser = async () => {
  try {
    const res = await fetch(url, {
      method: 'POST',
      body: JSON.stringify({
        user: userName.value,
        score: userScore.value,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
    userName.value = '';
    userScore.value = '';
    renderUsers();
    return res.json();
  } catch (error) {
    return false;
  }
};

export default addUser;

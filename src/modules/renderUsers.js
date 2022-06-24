import getUsers from './getUsers.js';

const scoresList = document.getElementById('scores-list');

const renderUsers = async () => {
  const users = await getUsers();
  scoresList.innerHTML = '';
  users.result.forEach((user) => {
    const userItem = document.createElement('li');
    userItem.classList.add('score-item', 'p-2');

    const userName = document.createElement('span');
    userName.setAttribute('class', 'name');
    userName.textContent = `${user.user} :`;
    userItem.appendChild(userName);

    const userScore = document.createElement('span');
    userScore.setAttribute('class', 'score');
    userScore.textContent = user.score;
    userItem.appendChild(userScore);

    scoresList.appendChild(userItem);
  });
};

export default renderUsers;
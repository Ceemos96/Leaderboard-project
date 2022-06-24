import './styles.css';
import './main.scss';
import renderUsers from './modules/renderUsers.js';
import addUser from './modules/addUser.js';

const inputFields = document.getElementById('input-fields');
const refreshButton = document.getElementById('refresh');

window.onload = (e) => {
  e.preventDefault();
  renderUsers();
};

inputFields.onsubmit = (e) => {
  e.preventDefault();
  addUser();
};

refreshButton.onclick = (e) => {
  e.preventDefault();
  renderUsers();
};

export const id = 'ZTp6WjEdBYQQYfIGvFXP';
export const url = `https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${id}/scores`;

export default async function getUsers() {
  try {
    const response = await fetch(url);
    return await response.json();
  } catch (error) {
    return false;
  }
}

export const getUsers = () => {
  return fetch(`https://jsonplaceholder.typicode.com/users`).then(
    (response) => {
      return response.json();
    }
  );
};

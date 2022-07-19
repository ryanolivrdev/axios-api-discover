const url = "http://localhost:5500/api"

function getUsers() {
  axios.get(url)
  .then(response => {
    apiResult.textContent = JSON.stringify(response.data);
  })
  .catch(error => console.error(error))
}

function getUser(id) {
  axios.get(`${url}/${id}`)
  .then( response => {
    const data = response.data;
    userName.textContent = data.name;
    userCity.textContent = data.city;
    userID.textContent = data.id;
    userAvatar.src = data.avatar;
  })
  .catch(error => console.error(error))
}

function addNewUser(newUser) {
  axios.post(url, newUser)
  .then(response => { console.log(response.data) })
  .catch(error => console.error(error))
}

function updateUser(id, userUpdated) {
  axios.put (`${url}/${id}`, userUpdated)
  .then(response => { console.log(response)})
  .catch(error => console.error(error))
}

function deleteUser(id) {
  axios.delete(`${url}/${id}`)
  .then(response => console.log(response))
  .catch(error => console.error(error))
}

const newUser = {
  name: "Test User",
  avatar: "https://picsum.photos/seed/picsum/200/300",
  city: "London"
};

const userUpdated = {
  name: "Pipoca",
  avatar: "https://picsum.photos/seed/picsum/200/300",
  city: "Belem"
}

deleteUser(1)
getUsers();
getUser(1);
//updateUser(3, userUpdated);
//addNewUser(newUser);

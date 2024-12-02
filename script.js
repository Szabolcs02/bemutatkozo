// Fetch random user data from RandomUser.me API
fetch('https://randomuser.me/api/')
  .then(response => response.json())
  .then(data => {
    const user = data.results[0];

    // Set profile picture, name, and contact details
    document.getElementById('profile-picture').src = user.picture.large;
    document.getElementById('name').innerText = `${user.name.first} ${user.name.last}`;
    document.getElementById('email').innerText = user.email;
    document.getElementById('phone').innerText = user.phone;
    document.getElementById('location').innerText = `${user.location.city}, ${user.location.country}`;
  })
  .catch(error => console.error('Error fetching user data:', error));

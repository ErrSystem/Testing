const loginUrl = 'http://localhost:8080/login';
const filesUrl = 'http://localhost:8080/files';

const loginData = {
  username: 'walletRoulette',
  password: 'WalletRouletteToTheMoon!!!', // Replace with the hashed password
};

fetch(loginUrl, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(loginData),
})
.then(response => response.json())
.then(data => {
  console.log('Login successful:', data.accessToken);
  const accessToken = data.accessToken;
  // Replace 'spin.js' with the actual filename you want to download
  const filename = 'spin.js';
  fetch(`${filesUrl}/${filename}`, {
    method: 'GET',
    headers: {
      'Authorization': `${accessToken}`,
    },
  })
  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.text();
  })
  .then(scriptCode => {
    import(`data:text/javascript;base64,${btoa(scriptCode)}`);
  })
  .catch(error => {
    console.error('Error getting file:', error);
  });
})
.catch(error => {
  console.error('Error during login:', error);
});
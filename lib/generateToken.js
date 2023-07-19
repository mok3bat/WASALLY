
// Define a global variable for the token
let token = null;

// Prerequisite values
const connectedAppClientId = '0a9faf71-d52e-4a17-a52a-24a0d5ad694c';
const connectedAppSecretId = '6dac74d9-65d6-48bc-b5f7-259a23b8bd5d';
const connectedAppSecretKey = '2Yh9wbplndBzimew1ZZ0wU+q8k0NnKuRdnnTiyD8GSk=';

// Email address for TOL; username for Tableau Server
const username = 'm.setit@gmail.com';

// TOL or Tableau server name. SSL is highly recommended
const tableauservername = 'https://10ax.online.tableau.com/t/setitsandboxdev427435/';

import jwt from "https://cdnjs.cloudflare.com/ajax/libs/jsonwebtoken/9.0.1/lib/JsonWebTokenError.min.js";

// Function to generate the JWT token
function generateToken() {
  const token = jwt.sign(
    {
      iss: connectedAppClientId,
      exp: Math.floor(Date.now() / 1000) + 600, // Expiry in 10 minutes (10 * 60 seconds)
      jti: uuid.v4(),
      aud: 'tableau',
      sub: username,
      scp: ['tableau:views:embed'],
    },
    connectedAppSecretKey,
    { algorithm: 'HS256', header: { kid: connectedAppSecretId, iss: connectedAppClientId } }
  );
  return token;
}

// Call the function to generate the token and store it in the global variable
token = generateToken();

// Export the functions or variables you want to access in other files (optional)
export { generateToken };

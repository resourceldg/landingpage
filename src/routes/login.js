import fetch from 'node-fetch';

const headers = {
    'Content-Type': 'application/json',
    Accept: 'application/json',
    Secure: false,
    logLevel: 'debug',
};

export async function post(req, res) {
    try {
        const { email, password } = req.body;

        const result = await fetch(`https://walatic:1337/auth/local`, {
            method: 'POST',
            headers,
            body: JSON.stringify({ identifier: email, password: password }),
        });

        const parsed = await result.json();
        console.log(parsed);

        if (typeof parsed.error !== 'undefined') {
            throw new Error(parsed.error);
        }

        req.session.token = parsed.jwt;
        req.session.user = parsed.user;
        res.end(JSON.stringify({ token: parsed.jwt }));
    } catch (error) {
        res.end(JSON.stringify({ error: error.message }));
    }
}

//  OTHER FETCH  //

/*

import axios from 'axios';

export async function post(req, res) {
  const { email, password } = req.body;  
    axios
      .post('http://localhost:1337/auth/local', {
        identifier:email,
        password: password
      })
      .then(response => {
        // Handle success.
        console.log('Well done!');
        console.log('User profile', response.data.user);
        console.log('User token', response.data.jwt);
        req.session.token = response.data.jwtn;
        res.end(JSON.stringify({ token: response.data.jwt }));
      })
      .catch(error => {
        // Handle error.
        console.log('An error occurred:', error.response);
      });

} */

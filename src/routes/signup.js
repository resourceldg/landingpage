import fetch from 'node-fetch';

const headers = {
    'Content-Type': 'application/json',
    Accept: 'application/json',
    Secure: false,
    logLevel: 'debug',
};

  export async function post(req, res) {
    try {
        const { username, email, password} = req.body;

        const result = await fetch(`https://walatic.com:1337/auth/local/register`, {
            method: 'POST',
            headers,
            body: JSON.stringify({ username, email, password }),
        });

        const parsed = await result.json();
        console.log(parsed);

        if (typeof parsed.error !== 'undefined') {
            throw new Error(parsed.error);
        }

        req.session.token = parsed.jwt;
        req.session.user = parsed.user.username;
        res.end(JSON.stringify({ token: parsed.jwt}));
    } catch (error) {
        res.end(JSON.stringify({ error: error.message }));
    }
}


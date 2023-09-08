import http from 'k6/http'
import sleep from "k6";

// post testing is not recommended to work test APIs that are in production because it can create unnessary data.
export let options = {
    insecureSkipTLSVerification: true,
    noConnectionReUse: false,
    vus: 1, // virtual users
    duration: '5s' // 1m, 1h, 1h1m1s
};

export default () => {
    const url = 'http://localhost:8000/v1/user';
    const payload = JSON.stringify({
        user_name: "Username"
    });
  
    const params = {
        headers: {
            'Content-Type': 'application/json',
        },
    };

    http.post(url, payload, params)
    sleep(1) // to send request in every 1 second by each user (vus)
};
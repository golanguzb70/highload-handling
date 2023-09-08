import http from 'k6/http'
import { check, sleep } from "k6";


export let options = {
    insecureSkipTLSVerify: true,
    noConnectionReUse: false,
    vus: 1, // virtual users
    duration: '10s' // 1m, 1h, 1h1m1s
};

export default () => {
    let res = http.get('http://localhost:8000/v1/post/1')
    check(res, { "status was 200": (r) => r.status == 200 })
    sleep(1); // this is interval that each vus send request
};
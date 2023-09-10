/*
    Load Testing is primarily concerned with assessing the current performance of your system
    in terms of concurrent users or requests per second.
    When you want to understand if your system is meeting the performance goals,  this is the type of test
    you'll run.

    Run a load test to: 
     - Access the current performance of your system under typical and peak load.
     - Make sure your are continuously meeting the performance standards as you make changes to your system

     Can be used to simulate a normal day in you business

 */
import http from 'k6/http'
import { check, sleep } from "k6";


export let options = {
    insecureSkipTLSVerify: true,
    noConnectionReUse: false,
    vus: 1, // virtual users
    stages: [
        { duration: '5m', target: 100 }, // simulate ramp-up of traffic from 1 to 100 users over 5 minutes
        { duration: '10m', target: 100 }, // stay at 100 users for 10 minutes
        { duration: '5m', target: 100 }, // ramp-down to 0 users
    ],
    thresholds: {
        http_req_duration: ['p(99)<150'], // 99% of requests must complete below 150ms
    }

};

export default () => {
    let res = http.get('http://localhost:8000/v1/post/1')
    check(res, { "status was 200": (r) => r.status == 200 })
    sleep(1); // this is interval that each vus send request
};
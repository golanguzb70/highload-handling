/* 
    Stress testing is a type of performance testing used to determine the limits of the system.
    The purpose of this test is to verify the stability and reliabality of the system under extreme contitions.

    Run a stress test to: 
     - Determine how your system will behave under extreme contitions
     - Determine what is the maximum capacity of your system in terms of users or throughput
     - Determine the breaking point of your system and its failure mode
     - Determine if your system will recover whithout manual intervention after the stress test is over
*/

import http from 'k6/http'
import { sleep } from "k6";


export let options = {
    insecureSkipTLSVerify: true,
    noConnectionReUse: false,
    stages: [
        { duration: '2m', target: 100 }, // below normal load
        { duration: '5m', target: 100 }, 
        { duration: '2m', target: 200 }, // normal load
        { duration: '5m', target: 200 }, 
        { duration: '2m', target: 300 }, // around the the breaking point
        { duration: '5m', target: 300 }, 
        { duration: '2m', target: 400 }, // beyond the breaking point
        { duration: '5m', target: 400 }, 
        { duration: '10m', target: 0  } // scale down, Recovery stage
    ]
};
const API_BASE_URL = "http://localhost:8000/v1"
export default () => {
    http.batch([
        [ 'GET', `${API_BASE_URL}/post/1` ],
        [ 'GET', `${API_BASE_URL}/post/list` ],
        [ 'GET', `${API_BASE_URL}/user/list` ],
    ])

    sleep(1); // this is interval that each vus send request
};
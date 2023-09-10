/* 
    Spike testing is a type of performance testing in which an application 
    receives a sudden and extreme increase or decrease in load. The goal of spike testing is 
    to determine the behavior of a software application when it receives extreme variations in traffic.

    Run a spike test to: 
     - Determine how your system will perform under a sudden surge of traffic 
     - Determine if your system will recover once the traffic has subsided

    Success is based on expectation. System will genereally react in 1 of 4 ways 
     - Excellent: system performance is not degraded during the surge of traffic. 
       Response time is similar during low traffic and high traffic.
     - Good: Response time is slower, but the system does not produce any errors.
       All requests are handled.
     - Poor: System produces error during the surge of traffic, but recovers to normal after the traffic subsided.
     - Bad: System crashes, and does not recover after the traffic has subsided.
*/

import http from 'k6/http'
import { sleep } from "k6";


export let options = {
    insecureSkipTLSVerify: true,
    noConnectionReUse: false,
    stages: [
        { duration: '10s', target: 100 }, // below normal load
        { duration: '1m', target: 100 }, 
        { duration: '10s', target: 1400 }, // spike to 1400 users
        { duration: '3m', target: 1400 },  // stay at 1400 users for 3 minutes
        { duration: '10s', target: 100 }, // scale down. Recovery stage
        { duration: '3m', target: 100 }, 
        { duration: '10s', target: 0 },
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
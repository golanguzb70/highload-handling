/*
    Soak testing is used to validate reliability of the system over a long time

    Run soak test to: 
     - Verify that your system doesn't suffer from bugs or memory leaks, which result in a crash or restart.
     - Verify that expected application restarts don't lose requests
     - Find bugs related to race conditions that appear sporadically
     - Make sure yuor database doesn't exhause the alloted storage space and stops
     - Make sure your logs don't exhaust the  allotted disk storage
     - Make sure the external services you depend on don't stop wroking after a certain amount  of requests.

    How to run a soak test: 
     - Determine the maximum amount of users your system can handle
     - Get the 75-80% of thet value
     - Set VUs to that value
     - Run the test in 3 stages. Rupm up to the VUs, stay there for 4-12 hours, rump down to 0.
*/

import http from 'k6/http'
import { sleep, check } from "k6";


export const options = {
    insecureSkipTLSVerify: true,
    noConnectionReUse: false,
    stages: [
        { duration: '1m', target: 400 }, // rump up to 400 users
        { duration: '2m', target: 400 }, // Stay at 400 users for ~4 hours
        { duration: '1m', target: 0 }, // scale down. (optional)
    ]
};

export default () => {
    const res = http.get('http://localhost:8000/v1/post/1')
    check(res, { "status was 200": (r) => r.status == 200 })

    sleep(1); // this is interval that each vus send request
};
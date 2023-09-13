/*

Smoke tests have a minimal load. Run them to verify that the system works well under minimal load and to 
gather baseline performance values.

This test type consists of running tests with a few VUs — more than 5 VUs could be considered a mini-load test.

Similarly, the test should execute for a short period, either a low number of iterations or a duration 
from seconds to a few minutes maximum.

It's a good practice to run a smoke test as a first step, with the following goals:
    - Verify that your test script doesn't have errors.
    - Verify that your system doesn't throw any errors (performance or system related) when under minimal load.
    - Gather baseline performance metrics of your system’s response under minimal load.
    - With simple logic, to serve as a synthetic test to monitor the performance and availability of production environments.
*/

import http from 'k6/http';
import { check, sleep} from 'k6';

export const options = {
    vus: 3, // Key for Smoke test. Keep it at 2, 3, max 5 VUs
    duration: '1m', // This can be shorter or just a few iterations
};

export default () => {
    const res = http.get('http://localhost:8000/v1/post/1')
    check(res, { "status was 200": (r) => r.status == 200 })
    sleep(1);
};

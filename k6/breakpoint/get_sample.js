/*
    Breakpoint testing aims to find system limits. Reasons you might want to know the limits include:

        - To tune or care for the system's weak spots to relocate those higher limits at higher levels.
        - To help plan remediation steps in those cases and prepare for when the system nears those limits.
     
    In other words, knowing where and how a system starts to fail helps prepare for such limits.

    A breakpoint ramps to unrealistically high numbers. This test commonly has to be stopped manually or automatically 
    as thresholds start to fail. When these problems appear, the system has reached its limits.

    Teams execute a breakpoint test whenever they must know their system's diverse limits. Some conditions that may warrant a breakpoint 
    test include the following:
        - The need to know if the system's load expects to grow continuously
        - If current resource consumption is considered high
        - After significant changes to the code-base or infrastructure.
*/

import http from 'k6/http';
import {sleep, check} from 'k6';

export const options = {
  // Key configurations for breakpoint in this section
  executor: 'ramping-arrival-rate', //Assure load increase if the system slows
  stages: [
    { duration: '10m', target: 20000 }, // just slowly ramp-up to a HUGE load
  ],
};

export default () => {
    const res = http.get('http://localhost:8000/v1/post/1')
    check(res, { "status was 200": (r) => r.status == 200 })
    sleep(1);
};




# Why to test?
1. To check your API performance. 
2. To  check your app stability. 
3. To check how many users can be handled by your application.

# What is k6?
Grafana k6 is an open-source load testing tool that makes performance testing easy and productive for engineering teams. k6 is free, developer-centric, and extensible.

Using k6, you can test the reliability and performance of your systems and catch performance regressions and problems earlier. k6 will help you to build resilient and performant applications that scale.

Read more about K6 [here](https://k6.io/docs/)

# How to install k6?
Here is [documentation]() to install k6.

# 4 types of performance testing. 
1. Load testing
2. Stress testing
3. Spike testing
4. Soak testing

![perfomace testing](https://media.geeksforgeeks.org/wp-content/uploads/20190607143956/226.jpg)

# Load testing
Load Testing is primarily concerned with assessing the current performance of your system
in terms of concurrent users or requests per second.
When you want to understand if your system is meeting the performance goals,  this is the type of test
you'll run.

Run a load test to: 
    - Access the current performance of your system under typical and peak load.
    - Make sure your are continuously meeting the performance standards as you make changes to your system

    Can be used to simulate a normal day in you business


See example of load testing [here.](https://github.com/golanguzb70/highload-handling/tree/main/k6/load)

# Stress testing
Stress testing is a type of performance testing used to determine the limits of the system.
The purpose of this test is to verify the stability and reliabality of the system under extreme contitions.

Run a stress test to:
- Determine how your system will behave under extreme contitions
- Determine what is the maximum capacity of your system in terms of users or throughput
- Determine the breaking point of your system and its failure mode
- Determine if your system will recover whithout manual intervention after the stress test is over

Read more about Stress testing [here](https://www.geeksforgeeks.org/stress-testing-software-testing/)

See example of stress test [here](https://github.com/golanguzb70/highload-handling/tree/main/k6/stress)
# Spike testing
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

# Soak testing
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
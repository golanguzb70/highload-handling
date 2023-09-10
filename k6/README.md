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
Stress testing is defined as a type of software testing that verifies the stability and reliability of the system. This test particularly determines the system on its robustness and error handling under extremely heavy load conditions.

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
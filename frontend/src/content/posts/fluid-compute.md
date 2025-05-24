---
title: "Introducing Fluid compute"
date: "2025-02-04"
author: "Marcelo Colome"
authorRole: "Product Manager, CI/CD and Compute"
excerpt: "A new model for web application infrastructure that optimizes performance and cost while meeting the demands of today's dynamic web."
readTime: "3 min read"
---

While dedicated servers provide efficiency and always-on availability, they often lead to over-provisioning, scaling challenges, and operational overhead. Serverless computing improves this with auto-scaling and pay-as-you-go pricing, but can suffer from cold starts and inefficient use of idle time.

It's time for a new balanced approach. [Fluid compute](#) evolves beyond serverless, uniting single-invocation functions for high-performance mini-servers. The model has reduced deployment times by 66%, improved resource efficiency, minimized cold starts, and reduced compute costs by up to 85%.

## What is Fluid compute?

Fluid compute is a new model for web application infrastructure. At its core, Fluid embraces a set of principles that optimize performance and cost while establishing a vision for meeting the demands of today's dynamic web:

- Compute triggers only when needed
- Real-time scaling from zero to peak traffic
- Existing resources are used before scaling new ones
- Billing based on actual compute usage, minimizing waste
- Pre-warmed instances reduce latency and prevent cold-starts
- Supports advanced tasks like streaming and post-response processing

All with zero configuration and zero maintenance overhead.

## The evolution of Vercel Functions

Fluid delivers measurable improvements across a variety of use cases, from ecommerce to AI applications. Its unique execution model combines serverless efficiency with server-like flexibility, providing real benefits for modern web applications.

### Smarter scaling with higher ceilings and better cost efficiency

Vercel Functions with Fluid compute prioritize existing resources before creating new instances, eliminating cold starts and managing warm compute for faster, more efficient scaling. By scaling functions before instances, Fluid shifts to a many-to-one model that can handle tens of thousands of concurrent invocations.

At the same time, Fluid mitigates the risks of uncontrolled execution that can drive up costs. Functions waiting on backend responses can process additional requests instead of sitting idle, reducing wasted compute. Built-in recursion protection prevents infinite loops before they spiral into excessive usage.

### Cold start prevention for reduced latency

Fluid minimizes the effects of cold starts by greatly reducing their frequency and softening their impact. When cold starts do happen, a [flush-based runtime](#) with full Node.js and Python support accelerates initialization. [Bycode caching](#) further speeds up invocation by pre-compiling function code, reducing startup overhead.

### Support for advanced tasks

Vercel Functions with Fluid compute extend the lifecycle of an invocation, enabling function executions to extend beyond when the final response is sent back to a client.

With `waitUntil`, tasks like logging, analytics, and database updates can continue to run in the background of a compute function to reduce time to response. For AI workloads, this means managing post-response tasks like model training updates without impacting real-time performance.

### Dense global compute and multi-region failover

Vercel Functions with Fluid compute support a dense global compute model, running compute closer to where your data already lives instead of attempting unrealistic application scales across every edge location. Rather than forcing widespread data distribution, this approach ensures your compute is placed in regions that align with your data, optimizing both performance and consistency.

Dynamic requests are routed to the nearest healthy compute region—among your specified locations—ensuring efficient and reliable execution. In addition to standard [multi-availability zone failover](#), for enterprise customers, multi-region failover is now the default when activating Fluid.

# Why do we need Asynchronous work?

The simple answer is we want to improve the user experience.

# The evaluation matrix
 * **Explicit execution**: If we start the execution of a bunch of work on a new thread, we should be able to control it.
 * **Easy thread management**: In asynchronous work, thread management is the key.
 * **Easily composable**: Ideally, It would be great if we can create an asynchronous work and as we start spinning background thread, it just do it’s work without depending any other thread (especially on UI thread) and stays independent from the other thread until it finishes its job.
 * **Minimum the side effects**: While working with multiple threads, the other thread should experience minimum side effects from the other thread.

# What is Reactive Programming?

RX = OBSERVABLE + OBSERVER + SCHEDULERS

> Reactive programming is a programming paradigm oriented around data flows and the propagation of change. This means that it should be possible to express static or dynamic data flows with ease in the programming languages used, and that the underlying execution model will automatically propagate changes through the data flow.

# The four Reactive principles

 * A ***responsive*** application is the goal.
 * A responsive application is both ***scalable*** and ***resilient***. Responsiveness is impossible to achieve without both scalability and resilience.
 * A ***message-driven*** architecture is the foundation of scalable, resilient, and ultimately responsive systems.


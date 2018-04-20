What is JS?
It is a single threaded, concurrent, runs in browser, asynchronous, weakly typed, interpreted, prototypal, multi-paradim language.

What is the task queue?
It returns the synchronous code that returns from the web api.

Event loop: When call stack is empty, take from the task queue

Explain event loop:
We have two stacks, the call stack and the task queue. The event loops job is to take synchronous code from the task queue and put it into the call stack when the call stack is empty.

JS engine:
memory heap and call stack

JS runtime env:
Web API, task queue, and event loop.

Asynchronicity in JS:
callbacks and promises

callback:
function passed into another function as an argument which is then invoked inside the outer function to complete some kind of routine or action.

promise:
an object that represents the eventual completion or failure of an asynchronous operation.

Web API:
Has a thread pool, uses threads from this thread pool to execute these things.
As they're resolved, organizes them.

Promise.all():
takes an array of promises, if the item is not a promise it gets turned into a resolved promise.
Promise.all is asynchronous, so even if its promises are synchronous they do not get executed until the standard JS code is run.

Async-Await:
Async functions return promise objects.
Only exists to make writing promises easier.

Why do instant promises still come after?
They have to go to the web API and come back after the call stack is finished.

Async Await and Promise.all():
They are different because processes halt at await.
If you have
await promise
"hello"
await promise
"hello my {promise}!"

hello comes only after the promises resolve, same with log at bottom

1. What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?
Ans:
getElementById is used to find a specific html element.While,getElementsByClassName is used to find html elements of same class and querySelector is used to find the first element that matches a specific css selector. Lastly, querySelectorAll is used to find all the elements that matches a specific css selector.

2. How do you **create and insert a new element into the DOM**?
Ans:
document.createElement() to create a new element.
parentElement.appendChild(newElement) to insert that new element.

3. What is **Event Bubbling** and how does it work?
Ans:
Event Bubbling is a technique where an event moves from the target element up to the root element. When an event is triggered, it first runs on the target element, then moves to its parent and continues until it reaches the top element.

4. What is **Event Delegation** in JavaScript? Why is it useful?
Ans:
Event Delegation is a technique where an event listener is applied to a parent element to handle events on its child elements instead of adding separate listeners to each child. It is useful for handling dynamically added elements and reducing the number of event listeners.

5. What is the difference between **preventDefault() and stopPropagation()** methods?
Ans:
preventDefault() is used to stop browser's default behavior.While, stopPropagation() is used to stop the event bubbling up to its parent.


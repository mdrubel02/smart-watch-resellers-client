import { Container, Typography } from '@mui/material';
import React from 'react';

const Blog = () => {
    return (
        <Container mb={6}>
            <Typography mb={3} variant='h2'>What are the different ways to manage a state in a React application?</Typography>
            <Typography mb={3} variant='h4'>Not only are there are a lot of different kinds of state, but there often dozens of ways of managing each kind. Which should you choose?
                In this guide, we will uncover the several kinds of state in your React apps that you might not be aware of, plus how to manage them in the most effective way.
                Local state
                Global state
                Server state
                URL state</Typography>
            <Typography mb={3} variant='h2'>How does prototypical inheritance work?</Typography>
            <Typography mb={3} variant='h4'>Every object with its methods and properties contains an internal and hidden property known as [[Prototype]]. The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the [[Prototype]] of an object, we use Object.getPrototypeOf and Object.setPrototypeOf. Nowadays, in modern language, it is being set using</Typography>
            <Typography mb={3} variant='h2'>What is a unit test? Why should we write unit tests?</Typography>
            <Typography mb={3} variant='h4'>Unit testing still causes controversy among developers and product managers. There are both opponents and supporters of this kind of testing. In this article, I’ll highlight the main advantages of unit testing.Let’s start with the definition: Unit testing is a software testing method where “units”—the individual components of software—are tested. Developers write unit tests for their code to make sure that the code works correctly. This helps to detect and protect against bugs in the future.

                Sometimes developers write unit tests first, then write the code. This approach is also known as test-driven development (TDD). In TDD, requirements are turned into specific test cases, then the software is improved to pass the new tests. In this approach, no code is added that hasn’t been proven to meet defined requirements. Unit testing is similar, in that it allows developers to modify code without affecting the functionality of other units or the product, as a whole.</Typography>
            <Typography mb={3} variant='h2'>React vs. Angular vs. Vue?</Typography>
            <Typography mb={3} variant='h4'>
                This post is a comprehensive guide on which is perhaps the right solution for you: Angular vs React vs Vue.

                Just a couple of years ago, developers were mainly debating whether they should be using Angular vs React for their projects. But over the course of the last couple of years, we’ve seen a growth of interest in a third player called Vue.js.

                If you are a developer starting out on a project and cannot decide on which JavaScript framework to use, this guide should help you make a decision.
            </Typography>
        </Container>
    );
};

export default Blog;
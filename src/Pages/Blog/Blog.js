import React from 'react';

const Blog = () => {
    return (
        <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:ml-8 lg:mt-8'>
            <div class="card w-96 bg-base-100 shadow-xl border">
                <div class="card-body">
                    <h2 class="card-title text-primary">How will you improve the performance of a react app?</h2>
                    <p>I will disable all extensions temporarily, especially React Developer Tools, because they can mess with the result of the analysis and it can make our website speed little bit slower.
                    </p>
                </div>
            </div>

            <div class="card w-96 bg-base-100 shadow-xl border">
                <div class="card-body">
                    <h2 class="card-title text-primary">What are the different ways to manage a state in a react application?</h2>
                    <p>We can manage our state in react by using useState hook, context api using redux</p>
                </div>
            </div>

            <div class="card w-96 bg-base-100 shadow-xl border">
                <div class="card-body">
                    <h2 class="card-title text-primary">How does prototypical inheritence work?</h2>
                    <p>Every object with its methods and properties contains an internal and hidden property known as prototype in javascript.The prototypical Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object.</p>
                </div>
            </div>

            <div class="card w-96 bg-base-100 shadow-xl border">
                <div class="card-body">
                    <h2 class="card-title text-primary">Searching product by their name</h2>
                    <p>We can find any property from an array of objects . There is an preferable way to find products name from and array and it is filter method by filtering an array we can find there name easily.
                    </p>
                </div>
            </div>

            <div class="card w-96 bg-base-100 shadow-xl border">
                <div class="card-body">
                    <h2 class="card-title text-primary">What is unit test and why should write unit test</h2>
                    <p>Unit testing is a software testing method where individual components of software are tested. Developers write unit tests for their code to make sure that the code works correctly and optimize their software performance easily. This helps to detect and protect against bugs in the future.
                    </p>
                </div>
            </div>

        </div>
    );
};

export default Blog;
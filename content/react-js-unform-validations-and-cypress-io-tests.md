---
title: React.js, UnForm, validations and Cypress.io tests
category: general
created-at: 2019-06-20T19:48:28.184+00:00
---

Looking some years back, we were all used to have a solid framework, promising to solve all of our issues, 
even if we realize that the framework solution was a bad solution, we kept it with, because… well, 
it’s the framework way. That’s what amazes me about React.js and JavaScript, some will complain about the 
huge number of libraries to solve same issues, but it’s actually a big plus, everything is moving fast, 
forward, to be better, and we’re free to keep what makes sense for us.

<br/>

[React.js](https://reactjs.org/) - amazing Frontend library to easy development.

[Cypress.io](https://www.cypress.io/) - testing library.

[UnForm](https://github.com/Rocketseat/unform) - library to ease the creation of forms using React.js.
<br/>

## 1. Straight to the point

We're all grown boys and girls, let's take shortcuts

```bash
git clone https://github.com/converge/react.js-hooks-unform-cypress.io-tutorial.git
```

### 1.1 Install the dependencies

```bash
npm install
```

### 1.2 The structure of the project is:

![Project Tree](https://converge-space.ams3.digitaloceanspaces.com/joaovanzuita-blog/project_structure.png)

### 1.3 Start it

```bash
npm start
```

### 1.4 The main files are:

```bash
a) cypress.e2e.test.js
b) src/components/Login/index.jsx
c) cypress.json
```

## 2. Baby steps

Let's go deeper now and check the important files and how they work.*src/components/Login/index.jsx* file contains the HTML Form, some libraries abstract the use of forms, adding unnecessary layers of complexibility, what I like about UnForm is that the library is clean and simple to use, and that's what we need in a daily basis.

<br/>
To create a Form using UnForm, we initially instantiate two components, `Form` and `Input`. `Form` will work as a wrapper to indicate we're using the Form component of UnForm, and Input is another component to indicate we're using an HTML input element.
<br/>
<br/>

*Form* contains some properties to ease the process of form handling, in this tutorial we're going to use `onSubmit` to link a function to handle the form submission and `schema` to handle with `Yup` validations.Knowing that, now we can understand what's going on here:

```js
<Form onSubmit={handleSubmit} schema={schema}>
  <div className="form-item">
    <Input name="username" type="text" placeholder="Username" />
  </div>
  <div className="form-item">
    <Input name="password" type="password" placeholder="Password" />
  </div>
  <span>{authUser}</span>
  <div className="form-item">
    <button type="submit">Login</button>
  </div>
</Form>
```

When we hit the `Login` button, the `schema` will be called and Yup will validate our data. We're setting our validation in this self-explanatory function:


```js
const schema = Yup.object().shape({
  username: Yup.string().required('Username is required'),
  password: Yup.string().required('Password is required')
})
```

What's important about it, is that `UnForm` will catch the error message and display inside an <span> element just after the validated field.

<br/><br/>
The `handleSubmit` function will be called in case the validation pass and will check for the login and password. Here we have just a simple credential validation for the tutorial purpose:

```js
const handleSubmit = data => {
  const auth = data.username !== data.password ? true : false
  if (auth) {
    setAuthUser('Wrong login credentials !')
  } else {
    setAuthUser('Correct credentials !')
  }
}
```

## Cypress.io end to end tests

First time I used Cypress.io I was so amazed! I had been using another library for an end to end tests for a long time, and Cypress is so well organized, and structured, and there is the desktop tool to help test and debug.

<br/>
First of all, if you're new to Cypress.io this is a good start, but after it you should go to their documentation, there is so much more about it! My purpose here with Cypress.io is just to show a simple and working example.
<br/><br/>
Los geht's!
<br/><br/>
When you did `npm install` before, Cypress.io was installed, now you can hit `cypress open` in your terminal to load the desktop app.
<br/>

![Cypress Desktop App](https://converge-space.ams3.digitaloceanspaces.com/joaovanzuita-blog/cypress-app.png)

If you click on the `cypress.e2e.js` filename it will load a browser and start doing the end to end test if it passes, a green mark will appear, if it fails, you will notice with some erros messages and some useful debug information.

<br/>
Before we get start, have a look at `./cypress.json`, it's our Cypress config file, and it's self examplanatory.

<br/>
Let's check how the tests were made, load the `./__tests__/cypress.e2e.js` file:

#### This activate cy.<control+enter> code completion

```js
// active IntelliSense///
<reference types="Cypress" />
```

```js
// describe what we will test
describe('e2e: login validation', () => {
  // before each test case, we will reset/reload everything to start a clean test
  beforeEach(() => {
    cy.visit('/')
  })
})
```

But what, how do `cy.visit('/')` knows where is my website? Remember the `cypress.json` file? We have a `baseUrl` entry that will be used by Cypress to know what to load.

<br/>
Continuing... here we're only clicking in the only button of the page, and searching for the text `Username is required` in the DOM tree.

```js
it('should show username is required warning message', () => {
  cy.get('button').click()
  cy.contains('Username is required')
})
```

Now let's check if the `Yup` validation is working, let's write down in the `username` field and click the `Login` button and finally check if the validation message show up;

```js
it('should show password is required warning message', () => {
  cy.get(':nth-child(1) > input').type('admin')
  cy.get('button').click()
  cy.contains('Password is required')
})
```

Now we try to login with wrong login credentials. At this moment you're already able to understand the steps right?

```js
it('should show incorrect login or password warning message', () => {
  cy.get(':nth-child(1) > input').type('admin')
  cy.get(':nth-child(2) > input').type('wrong-password')
  cy.get('button').click()
  cy.contains('Wrong login credentials !')
})
```

And finally, let's check for the correct credentials;

```js
it('should show success login message', () => {
  cy.get(':nth-child(1) > input').type('admin')
  cy.get(':nth-child(2) > input').type('admin')
  cy.get('button').click()
  cy.contains('Correct credentials !')
})
```

What if we're working with CI/CD tools and need to automate the testing process and doesn't want to use the desktop tool? In this case we can only call Cypress using the command line;

```js
npx cypress run
```

That's it!

<br/>
Clean and easy React Form solution using React Hoosk with Yup validation and Cypress.io end to end tests.
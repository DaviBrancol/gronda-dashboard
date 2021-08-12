# Gronda Dashboard - Testing

Welcome to my test for Gronda Company. Here you will find information about
<br />

- What was developed in the test.
- How to run the project and basics of architecture.
- Additional features beyond the test scope.

## About the project

All code for this test can be found in branch master. The commits are made with git syntax so it's easy to understand what was made in each commit of this code.
<br />
The state manager used for this project is Pure Context with logic hooks and services layer. The architecture will be more detailed below.
<br />
The style framework used is Tailwind, the same one that was used in stripe. You may find more in tailwindcss.com
<br />
<br />

## Installation

I recommend you to use the package manager yarn, but you may also use npm.

```sh
yarn
# or
npm install
```

<br />

# Architecture Patterns

The base architecture of this project was developed by me, and consists on the following layers and responsabilities.
<br />
Context
Responsible for the state manager, the context layer will store all the information between the pages and components. It's only accessed by the logical hook, for better mocking experience inside the React Testing Library.
<br />
Services
For accessing the APIs and also the mocks on this project, the services layer will handle all the API logic and parse the data that comes from the API and make it readable to the interfaces defined in React.
<br />
Logical Hooks
Acting as a controller for both layers and the pages as well, the hooks layer will handle the interactions between all other layers and controll their actions and payloads.

<br />
<br />

## Directory Schema

This project uses the following directory schema inside the src folder, other files outside the src folder are the default Next.js files.

- components
- context
- css
- hooks
- mock
- pages
- screens
- services
- typings
- utils

As a design pattern for code styling, all src root folders have an index.ts / index.tsx file for exporting the content stored inside, as exampled below.

- components
  - ExampleOne
    - index.tsx <-- component implementation
  - ExampleTwo
    - index.tsx <-- component implementation
  - index.tsx <-- export here both

<br />
<br />

## Style System

This code uses the TailwindCSS framework for styling its components. TailwindCSS is a utility-first CSS framework packed with classes like flex, pt-4, text-center and rotate-90 that can be composed to build any design, directly in your markup.

I highly recommend you to use tailwind in your projects, since it saves you a lot of time on creating components and layouts for your application.

You can learn more about this approach and see all of its features into the [official tailwind website](https://tailwindcss.com)

<br />
<br />

## Package Commands

Below are described all commands available in the package.json file.

```sh
yarn dev # Starts the applcation in the developer mode.
yarn build # Creates a build pack and exports as a static version
yarn commit # Module commitzen for commits
yarn start # Starts the application with builded version.
yarn lint # Applies all lint rules defined in prettier and eslint.
yarn test # Runs all spec.tsx and spec.ts test files.
yarn test-errors # Runs all spec.tsx and spec.ts test files showing logs.
yarn test:coverage # Runs the coverage of the tests through the application.
```

<br />
<br />

## Default Port

This project uses the default PORT 3000

```sh
127.0.0.1:3000
# or
http://localhost:3000
```

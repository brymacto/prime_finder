## Prime Finder

Prime Finder is a simple app built using an Express back end and a React front end.

A user can submit an upper limit. Given this upper limit `n`, Prime Finder returns the median prime number(s) of the set of prime numbers less than `n`.

## Setting up your environment
* `yarn install`

## Running the application in development mode
* In root directory: `yarn start`
  * Express server will run on port `3001` by default
* In `client` directory: `yarn start`
  * Client will run on port `3000` by default
  
After running both processes, launch `localhost:3000` to get started.

## Running tests
* For back end API tests, from root directory: `yarn test`
* Front end tests, from `client` directory: `yarn test` 
* For linting, from root directory: `yarn run lint`

## Learnings
* Implementing 'Sieve of Eratosthenes' was challenging. I'm not sure if my implementation is an effective one, but the performance drastically improved.
* I'm new to Express and Node back ends generally, so I wasn't too familiar with the patterns (Express routing, middleware, etc.)  

## Next Steps
* Measure the algorithm efficiency: through manual testing I've determined the efficiency has improved significantly, but I would like to profile the performance.
* Front end tests: snapshot tests for components, testing logic for result messages (or these may be covered by snapshots).
* Validations on user input: Currently, when a user enters a non-numeric value, they get a reasonable message. However, the best way to handle this would be to provide server validation of the input and respond with a `422` status as well as error message.
* Styling of the app: For simplicity I have not yet customized the front end styling beyond that which is provided by `create-react-app`.
* Consider architecture options for the Express app. Given the simplicity of the function and the lack of any db persistence, I figured a simple service  (`prime-number-calculator`) was appropriate. I'm new to Express however and I would like to explore different architecture approaches for similar apps.
  * It felt a little awkward wiring in the service at the router layer, but introducing a controller pattern seemed excessive at this point. Controllers could be introduced later when the app becomes more complex. 
  
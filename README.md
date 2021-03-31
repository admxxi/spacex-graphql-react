# SpaceX Graphql NextJs Project

<div><img src="public\wireframe.png" alt="Wireframe" width="600px" height="auto"></div>
*wireframe

### Setup instructions
1. Make sure you have nodejs running on your terminal
2. You can install yarn by using `npm install -g yarn@latest` or use npm
3. Download the repo `git clone https://github.com/admxxi/spacex-graphql-react`
4. Go inside the repo directory `cd spacex-graphql-react`
5. Add and Check your environment variables `cp .env-example .env`
6. Install dependencies `yarn install`
===Runners====
7. Run dev environment `yarn dev`
8. Run the tests `yarn test` // watch `yarn test --watchAll`
9. Build `yarn build`
10. Build and run production environment `yarn build && yarn next`

### How did I decide which technologies to use as part of the solution
I have chosen

### Improvements to be made


### Project Routes
#### Dashboard
- List the last 10 missions **[DONE]**
- Clicking on the card, goes to the **Mission** route **[DONE]**

#### Mission
- Details of the mission (image, mission details, ships, etc...) **[DONE]**
- Button to external link **[DONE]**

## Required
- React or NextJS **[NextJS]**
- GraphQL queries(list missions & single mission) **[DONE]**

## Desirable (not requires and won't affect final results)
- TypeScript **[YES]**
- NextJS using apollo client **[YES]**
- use React hooks within your code **[YES]**

### Bonus points
- Your code has tests. **[YES]**

TODO
- [x] Boilerplate
- [x] Routes
- [x] Data / Apollo
- [x] Components
- [x] Styling
- [x] Jest
- [ ] Unit Tests (50% Done)
- [ ] Cypress E2E Tests (Extra!)
- [ ] Docker environment (Extra!)
- [ ] Husky pre-commit (Eslint/Prettier/Jest) (Extra!)
- [ ] Error Handling (Extra!)
- [ ] Use the internal NextJS backend (Extra!)
- [ ] Back Arrow on MissionDetail (Extra!)
- [ ] Improve Graphql Queries (Extra!)

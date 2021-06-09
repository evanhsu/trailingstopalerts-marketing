## The marketing site for Trailing Stop Alerts

### Getting started 🍻

install dependencies:

```sh
yarn install
```

start the development server:

```sh
gatsby develop
```

At the project root, compile your application for deployment:

```sh
gatsby build
```

Clean the cache to fix certain errors - run the clean command before starting the dev server:

```sh
gatsby clean
```

At the project root, serve the production build of your site:

```sh
gatsby serve
```

### Deploying to Github Pages

**To deploy manually:**

1.  Make sure you're on the `source` branch (or a different branch that will be merged into `source`).

        git checkout source

2.  Build the static site and then copy the contents of the `public` folder into the root directory on the `main` branch. This is where GitHub Pages serves the static site from. This whole step is performed by the `deploy` script:

        yarn deploy

3.  If your changes aren't on the `source` branch, you should merge your branch into the `source` branch now (or open a pull request to do so).

**Automated Deployment**

This repo has a Github Workflow in place that will automatically build and deploy to GitHub Pages whenever a `push` event occurs on the `source` branch (this includes merging a pull request into the `source` branch).

The easiest way to deploy a change is just commit it to the `source` branch and then push to `origin`.

### Styles

This starter uses [styled-components](https://www.styled-components.com/). The theme file contains the base styles `src/styles/theme.js` and the global styles file contains basic element styles and a style reset `src/styles/GlobalStyles.js`.

### Navigation

This starter uses [react-anchor-link-smooth-scroll](https://github.com/mauricevancooten/react-anchor-link-smooth-scroll#readme) and [react-scrollspy](https://github.com/makotot/react-scrollspy).
To link a navigation item to a section simply add an id and string value to a section parent element that corresponds to the same navigation string value in `navigation.js`

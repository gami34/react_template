# clean-router

> Made with create-react-library

[![NPM](https://img.shields.io/npm/v/clean-router.svg)](https://www.npmjs.com/package/clean-router) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save clean-router
```

## Usage

```tsx
import React, { Component } from 'react'
import { useCleanRouter } from 'clean-router'

class Example extends Component {

  const [mainRouteHandler, subRouteHandler] = useCleanRouter(<Loader />)

  render() {
    return (
      <Router>
        {mainRouteHandler("/dash", <DashOutlet>, [
            subRouteHandler("", <Home />),                     // /dash/
            subRouteHandler("profile", <Profile />),           // /dash/profile
            subRouteHandler("email", <EmailOutlet />, [
              subRouteHandler("", <Inbox />),                  // /dash/email
              subRouteHandler("spam", <Spam />),               // /dash/email/spam
            ]),
        ])}
      </Router>)
  }
}
```

# Free Tailwind dashboard template

![Mosaic TailwindCSS template preview](https://user-images.githubusercontent.com/2683512/115404502-ad322d80-a1ed-11eb-91c0-1aa79b0949f0.png)

**Mosaic Lite** is a responsive dashboard template built on top of TailwindCSS and fully coded in React. It comes with several pre-coded charts (built with Chart.js 3) and widgets, and it's a great starting for anyone who wants to create a user interface for SaaS products, administrator dashboards, modern web apps, and more.

Use it for whatever you want, and be sure to reach us out on [Twitter](https://twitter.com/Cruip_com) if you build anything cool/useful with it.

Created and maintained with ❤️ by [Cruip.com](https://cruip.com/).

## Live demo

Check the live demo here 👉️ [https://mosaic.cruip.com/](https://mosaic.cruip.com/)

## Mosaic Pro

[![Mosaic Pro](https://user-images.githubusercontent.com/2683512/151177026-3d063355-976d-4fdb-a5ed-9c1501c58af2.png)](https://cruip.com/mosaic/)

## Design files

If you need the design files, you can download them from Figma's Community 👉 https://bit.ly/3sigqHe

## Table of contents

* [Usage](#usage)
  * [Project setup](#project-setup)
  * [Compiles and hot-reloads for development](#compiles-and-hot-reloads-for-development)
  * [Compiles and minifies for production](#compiles-and-minifies-for-production)
  * [Customize configuration](#customize-configuration)
* [Support notes](#support-notes)            
* [Credits](#credits)
* [Terms and License](#terms-and-license)
* [About Us](#about-us)
* [Stay in the loop](#stay-in-the-loop)

## Usage

This project was bootstrapped with [Vite](https://vitejs.dev/).

### Project setup
```
npm install
```

#### Compiles and hot-reloads for development
```
npm run dev
```

#### Compiles and minifies for production
```
npm run build
```

#### Customize configuration
See [Configuration Reference](https://vitejs.dev/guide/).

### Support notes
We are shipping our templates with a very basic React configuration to let you quickly get into the development process, but we don't discourage you from using any other configuration or framework built on the top of React. So, please note that any request dealing with React (e.g. extra features, customisations, et cetera) is to be considered out of the support scope.

For more information about what support covers, please see our (FAQs)[https://cruip.com/faq/].

## Credits

- [Nucleo](https://nucleoapp.com/)

## Terms and License

- Released under the [GPL](https://www.gnu.org/licenses/gpl-3.0.html).
- Copyright 2020 [Cruip](https://cruip.com/).
- Use it for personal and commercial projects, but please don’t republish, redistribute, or resell the template.
- Attribution is not required, although it is really appreciated.

## About Us

We're an Italian developer/designer duo creating high-quality design/code resources for developers, makers, and startups.

## Stay in the loop

If you would like to know when we release new resources, you can follow us on [Twitter](https://twitter.com/Cruip_com), or you can subscribe to our monthly [newsletter](https://cruip.com/#subscribe).


MIT © [gami34](https://github.com/gami34)

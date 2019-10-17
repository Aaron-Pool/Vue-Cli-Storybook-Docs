# Vue Cli + Typescript + Storybook + Addon Docs Working Example

I've seen a lot of people struggle to get storybook and vue CLI working side-by-side. So here's a working example.

Steps I used to create:

1) Init a typescript project with Vue-Cli (v4, which was just released)
2) Add [Vue Cli Storybook Plugin](https://github.com/storybookjs/vue-cli-plugin-storybook)
3) Disable Vue Jsx in the babel config (Vue Jsx is temporarily incompatible with addon-docs):
```js
// babel.config.js
module.exports = {
  presets: [["@vue/cli-plugin-babel/preset", {
    jsx: false
  }]]
};
```

## Install dependencies
```
yarn
```

### Activates storybook server and begins code watch
```
yarn storybook:serve
```

### Builds a static version of storybook
```
yarn storybook:build
```

### Lints and fixes files
```
yarn lint --fix
```

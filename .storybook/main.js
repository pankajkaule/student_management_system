module.exports = {
  "stories": ["../src/app/stories/**/*.stories.mdx", "../src/app/stories/**/*.stories.@(js|jsx|ts|tsx)"],
  "addons": ["@storybook/addon-links", "@storybook/addon-essentials", "@storybook/addon-interactions",
  // Add PostCSS into addons for compiling tailwind below
  {
    name: '@storybook/addon-postcss',
    options: {
      postcssLoaderOptions: {
        implementation: require('postcss')
      }
    }
  }
  // End PostCSS
  ],

  "framework": {
    name: "@storybook/nextjs",
    options: {}
  },
  docs: {
    autodocs: true
  }
};
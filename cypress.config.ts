import { defineConfig } from 'cypress';

export default defineConfig({
  projectId: 'zs9sy8',

  e2e: {
    baseUrl: 'http://localhost:4200',
  },

  component: {
    devServer: {
      framework: 'angular',
      bundler: 'webpack',
      options: {
        projectConfig: {
          root: '.',
          sourceRoot: './projects/lego/src',
          buildOptions: {
            outputPath: 'dist/lego',
            main: 'projects/lego/src/main.ts',
            tsConfig: 'projects/lego/cypress/tsconfig.json',
          },
        },
      },
    },
    specPattern: '**/*.cy.ts',
  },
});

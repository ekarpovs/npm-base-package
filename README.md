<div align="center">

## npm Base Package

A npm base package for starting to make real packages for Node.js projects.

</div>


### The project file system tree:

├── .github  
│   ├── workflows
│   │   ├── ci.yaml  
│   │   └── npm.yaml  
├── .husky  
│   ├── _  
│   │   ├── .gitignore  
│   │   └── husky.sh  
│   ├── pre-commit  
│   └── pre-push  
├── src  
│   └── index.ts  
├── test  
│   └── index.test.ts  
├── .eslintrc  
├── .gitignore  
├── .prettierrc  
├── .releaserc  
├── babel.config.js  
├── jest.config.ts  
├── LICENSE  
├── package-lock.json  
├── package.json  
├── README.md  
├── tsconfig.base.json  
├── tsconfig.cjs.json  
└── tsconfig.esm.json  

### The project infrastructure

[Typescript](http://www.typescriptlang.org/),  
[ESLint](https://www.npmjs.com/package/eslint) - a static code analysis tool,     
[prettier](https://www.npmjs.com/package/prettier) - a code formatter,  
[jest](https://www.npmjs.com/package/jest) - a testing framework,  
[husky](https://www.npmjs.com/package/husky) - a tool that allows to use Git hooks,  
[rimraf](https://www.npmjs.com/package/rimraf) - a deep deletion module for node.  
[move-file-cli](https://www.npmjs.com/package/move-file-cli) - a cross-platform alternative to mv for build scripts, etc.  
[semantic-release](https://www.npmjs.com/package/semantic-release) - automates the whole package release workflow including: determining the next version number, generating the release notes, and publishing the package
[cz-conventional-changelog"]() - Prompts for conventional changelog standard. After installation - use npm run commit instead of git commit

### Get started
#### 1. Create a package project

    Create a folder:
    ```bash
    mkdir <new-package-name>
    cd <new-package-name>
    ```
    Clone the repository:
    ```bash
    git clone https://github.com/ekarpovs/npm-base-package.git .
    ```
    Install:
    ```bash
    npm install
    ```
    Activate Git hooks:
    ```bash
    npm run prepare
    ```
    Note: After the command is executed once, the Git hooks will run automatically before each commit and push.

#### 2. Write the package code and tests.
#### 3. Prepare to publish the package: 
##### 3.1. [Sign up with npm](https://www.npmjs.com/signup).
##### 3.2. Sign in with your npm account in the terminal:
    ```bash
    npm login 
    follow the on-screen instructions
    ```
#### 4. Publish the package:
##### 4.1. Manual publishing:
 - Check the contents that will be included in the published version of the package:
    ```bash
    npx npm-packlist-cli
    ```
 - See what would be done when actually running the command:
    ```bash
    npm publish --dry-run
    ```
 - publish the package to npm:
    ```bash
    npm publish --access=public
    ```
    Note: --access=public is needed for scoped package (`@scope/<package-name>`) as it's private by default. If it's not scoped and doesn't have the `private` field set to `true` in `package.json` it will be public as well.
##### 4.2 Automated publishing:
    The publishing process is defined via Githib Actions:
    - ci.yaml - build and tests.
    - npm.yaml - publish the package to the npm registry.
    - githib.yaml - make package link to the Github registry. Not yet implemented.
    The actions runs automatically after each push and pull-request.

### Usage the commands from the command line during the development:

Linting:
```bash
npm run eslint
npm run eslint:fix
```
Testing:
```bash
npm run test
```
Clean buld output:
```bash
npm run clean
```
Build:
```bash
npm run build:esm
npm run build:cjs
npm run build
```
Prepack:
```bash
npm run prepack
```
Prepare:
```bash
npm run prepare
```
Git client hooks:
```bash
.husky/pre-commit
.husky/pre-push
```
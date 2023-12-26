# Resume Builder

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Demo

https://resume-builder.remoteinning.dixita.dev

## Steps to Use

In the project directory, run:

- `npm install`
- `npm start`

## Approach

I began with CRA to have a standard scaffold. As requirements mentioned to use minimum third party libraries, I decided to use react, react-dom and react-dom-router. All the components are created in the project itself and provide minimal functionalities they are supposed to.
As I use [JSON resume](https://jsonresume.org/) schema on my website, I decided to use that schema and theme for creating resume preview.
I tried to solve this problem in three parts,

- List view, that provides CRUD operations to resume.
- Editor, that provides a dynamic form to generate a JSON resume object.
- Preview, that shows live preview of the resume being modified by editor.

Once I completed these points along with making it responsive, I started working on bonus points. And I could complete the following additional features

- Autosave
- Print as PDF
- Multiple theme support

## Technical highlights

- Use of hooks along with context everywhere (wherever applicable).
- Ability to replace localStorage adaptor with indexDB adaptor (in future).
- Using CSS modules for styling components.
- Using Husky, lint-staged, eslint and prettier to ensure optimal code quality.

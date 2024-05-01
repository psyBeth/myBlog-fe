# Milestone Blog App

## Description

Project aims to create the frontend part of my personal Blog App with React. Following tools will be used in this project:
- HTML
- CSS
- JavaScript
- ReactJS

## Project Skeleton Example

```
Milestone Blog App (folder for context)
|       # Given to the students (Definition of the project)
SOLUTION
├── src
│    ├── index.js
│    ├── App.js
│    ├── assets
│    │   └── cw.png
│    ├── components
│    │   ├── auth
│    │   │   ├── Login.jsx
│    │   │   └── Register.jsx
│    │   ├── blog
│    │   │   ├── BlogCard.jsx
│    │   │   ├── BlogForm.jsx
│    │   │   ├── CommentForm.jsx
│    │   │   ├── DeleteModal.jsx
│    │   │   └── UpdateModal.jsx
│    │   ├── Footers.jsx
│    │   └── NavBars.jsx
│    ├── context
│    │   ├── AuthContext.jsx
│    │   └── BlogContext.jsx
│    ├── helper
│    │   ├── ToastNotify.jsx
│    │   └── menuList.js
│    ├── pages
│    │   ├── About.jsx
│    │   ├── Auth.jsx
│    │   ├── BlogDetail.jsx
│    │   ├── Dashboard.jsx
│    │   ├── MyBlog.jsx
│    │   ├── NewBlog.jsx
│    │   └── Profile.jsx
│    ├── reducer
│    │   ├── authReducer.js
│    │   └── blogReducer.js
│    ├── router
│    │   ├── AppRouter.jsx
│    │   └── PrivateRouter.jsx
│    ├── service
│    │   └── useAxios.jsx
│    └── styles
│        └── globalStyles.jsx
```

```
Milestone Blog App (folder for redux)

|----readme.md         # Given to the students (Definition of the project)
SOLUTION
├── src
|    ├── index.css
|    ├── index.js
|    ├── App.css
|    ├── App.js
|    ├── app
|    │   └── store.jsx
|    ├── assets
|    │   ├── about.png
|    ├── components
|    │   ├── auth
|    │   │   ├── LoginFom.jsx
|    │   │   └── RegisterForm.jsx
|    │   ├── blog
|    │   │   ├── Card.jsx
|    │   │   ├── CommentCard.jsx
|    │   │   ├── CommentForm.jsx
|    │   │   ├── DeleteModal.jsx
|    │   │   └── UpdateModal.jsx
|    │   ├── FooTer.jsx
|    │   ├── NavBar.jsx
|    ├── features
|    │   ├── authSlice.jsx
|    │   └── blogSlice.jsx
|    ├── helper
|    │   └── ToastNotify.jsx
|    ├── hooks
|    │   ├── useAuthCalls.jsx
|    │   ├── useAxios.jsx
|    │   └── useBlogCalls.jsx
|    ├── pages
|    │   ├── About.jsx
|    │   ├── Dashboard.jsx
|    │   ├── Detail.jsx
|    │   ├── Login.jsx
|    │   ├── NewBlog.jsx
|    │   ├── NotFound.jsx
|    │   ├── Profile.jsx
|    │   └── Register.jsx
|    └── router
|        ├── AppRouter.jsx
|        └── PrivateRouter.jsx
```
## Steps to Solution

- Step 1 : Create React App using `npx create-react-app milestone-blog-app` (yarn will be used in this case)

- Step 2 : Use NodeSs backend for authentication and CRUD operations.

- Step 3 : You can use css frameworks like Bootstrap, Tailwind Css, Material UI.

- Step 4 : You can view sample app on https://milestone-blogapp-cw.vercel.app/.

- Step 5 : Add project gif to your project and README.md file.
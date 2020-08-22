# MERN CRUD

This is a simple system that keep records build using MongoDB, Express.js, React.js, and Node.js with Create, Read, Update, and Delete operations REST API was implemented on the back-end.  React/Redux was used for the UI.


<img src="https://raw.githubusercontent.com/maxwell-kimaiyo/MERN-CRUD/master/Capture.JPG?raw=true"/>


## Getting Started

### Prerequisites

Your machine should have npm(or yarn), NodeJS and MongoDB server installed to use this locally

### Installation

```js
git clone https://github.com/maxwell-kimaiyo/MERN-CRUD.git

- Install server dependencies(in root directory)

```

```js
npm install
```

- Install client dependencies

```js
cd client
npm install
```

- You can either use your own local mongoDB database or any cloud database just change mongoURI and secretOrKey in config.js file

```js
export default {
  MONGODB_URL: process.env.MONGODB_URL || 'mongodb://localhost:27017/Products',
};

```

- This app uses concurrently so you don't need to run 2 different instances for client and server, use this command in root directory to run the app.

```js
npm run dev
```

## To Do

- Create
- Read
- Update
- Delete

## Support

Reach out to me at one of the following places!

- Twitter at <a href="http://twitter.com/maxxmalakwen" target="_blank">`@maxxmalakwen`</a>

Let me know if you have any questions. [Email Maxwell](developerkimaiyo@gmail.com)



---

## License

[![License](http://img.shields.io/:license-mit-blue.svg?style=flat-square)](http://badges.mit-license.org)

- **[MIT license](http://opensource.org/licenses/mit-license.php)**
- Copyright 2015 © <a href="http://fvcproductions.com" target="_blank">Maxwell Kimaiyo</a>.

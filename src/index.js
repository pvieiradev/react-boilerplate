import React from 'react';
import ReactDOM from 'react-dom';

const title = 'Paulo Vieira ReactJS Boilerplate';
const app = document.getElementById('app');
var content = (
    <h1>{title}</h1>
);

ReactDOM.render(content, app);

module.hot.accept();

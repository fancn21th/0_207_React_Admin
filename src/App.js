// in src/App.js
import * as React from "react";
import { Admin, Resource } from "react-admin";
import jsonServerProvider from "ra-data-json-server";
import { PostList, PostEdit } from "./posts";
import { UserList } from "./users";

const dataProvider = jsonServerProvider("https://jsonplaceholder.typicode.com");

const App = () => (
  <Admin dataProvider={dataProvider}>
    <Resource name="posts" list={PostList} edit={PostEdit} />
    <Resource name="users" list={UserList} />
  </Admin>
);

export default App;

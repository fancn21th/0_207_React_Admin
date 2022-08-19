// in src/App.js
import * as React from "react";
import { UserList } from "./users";
import { Admin, Resource } from "react-admin";
import jsonServerProvider from "ra-data-json-server";

const dataProvider = jsonServerProvider("https://jsonplaceholder.typicode.com");

const App = () => (
  <Admin dataProvider={dataProvider}>
    <Resource name="users" list={UserList} />
  </Admin>
);

export default App;

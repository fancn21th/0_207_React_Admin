import * as React from "react";
import {
  List,
  Datagrid,
  TextField,
  ReferenceField,
  EditButton,
  Edit,
  SimpleForm,
  ReferenceInput,
  SelectInput,
  TextInput,
} from "react-admin";

export const PostList = () => (
  <List>
    <Datagrid>
      <TextField source="id" />
      <ReferenceField source="userId" reference="users">
        {/* <TextField source="id" /> */}
        <TextField source="name" />
      </ReferenceField>
      <TextField source="title" />
      {/* <TextField source="body" /> */}
      <EditButton />
    </Datagrid>
  </List>
);

export const PostEdit = () => (
  <Edit>
    <SimpleForm>
      <ReferenceInput source="userId" reference="users">
        <SelectInput optionText="id" />
      </ReferenceInput>
      <TextInput source="id" />
      <TextInput source="title" />
      <TextInput source="body" />
    </SimpleForm>
  </Edit>
);

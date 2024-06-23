import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const TeamMemberCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="description" multiline source="description" />
        <TextInput label="name" source="name" />
        <TextInput label="photoUrl" source="photoUrl" />
        <TextInput label="role" source="role" />
      </SimpleForm>
    </Create>
  );
};

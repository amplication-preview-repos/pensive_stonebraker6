import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const TeamMemberEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="description" multiline source="description" />
        <TextInput label="name" source="name" />
        <TextInput label="photoUrl" source="photoUrl" />
        <TextInput label="role" source="role" />
      </SimpleForm>
    </Edit>
  );
};

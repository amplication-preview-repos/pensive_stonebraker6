import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  BooleanField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { PROFESSION_TITLE_FIELD } from "./ProfessionTitle";

export const ProfessionShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="initialCredit" source="initialCredit" />
        <BooleanField label="isReserved" source="isReserved" />
        <TextField label="name" source="name" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="User"
          target="professionId"
          label="Users"
        >
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <TextField label="Email" source="email" />
            <TextField label="First Name" source="firstName" />
            <TextField label="ID" source="id" />
            <TextField label="Last Name" source="lastName" />
            <ReferenceField
              label="Profession"
              source="profession.id"
              reference="Profession"
            >
              <TextField source={PROFESSION_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Roles" source="roles" />
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="Username" source="username" />
            <TextField label="wallet" source="wallet" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};

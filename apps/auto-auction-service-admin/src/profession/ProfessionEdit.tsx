import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  BooleanInput,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { UserTitle } from "../user/UserTitle";

export const ProfessionEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput step={1} label="initialCredit" source="initialCredit" />
        <BooleanInput label="isReserved" source="isReserved" />
        <TextInput label="name" source="name" />
        <ReferenceArrayInput
          source="users"
          reference="User"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={UserTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Edit>
  );
};

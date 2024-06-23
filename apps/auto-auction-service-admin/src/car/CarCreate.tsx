import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceArrayInput,
  SelectArrayInput,
  TextInput,
  NumberInput,
} from "react-admin";

import { AuctionTitle } from "../auction/AuctionTitle";

export const CarCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceArrayInput
          source="auctions"
          reference="Auction"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={AuctionTitle} />
        </ReferenceArrayInput>
        <TextInput label="imageUrl" source="imageUrl" />
        <TextInput label="make" source="make" />
        <TextInput label="model" source="model" />
        <NumberInput label="startPrice" source="startPrice" />
        <NumberInput step={1} label="year" source="year" />
      </SimpleForm>
    </Create>
  );
};

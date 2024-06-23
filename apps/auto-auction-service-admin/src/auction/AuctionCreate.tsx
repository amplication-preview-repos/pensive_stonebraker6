import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceArrayInput,
  SelectArrayInput,
  ReferenceInput,
  SelectInput,
  NumberInput,
  DateTimeInput,
} from "react-admin";

import { BidTitle } from "../bid/BidTitle";
import { CarTitle } from "../car/CarTitle";

export const AuctionCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceArrayInput
          source="bids"
          reference="Bid"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={BidTitle} />
        </ReferenceArrayInput>
        <ReferenceInput source="car.id" reference="Car" label="Car">
          <SelectInput optionText={CarTitle} />
        </ReferenceInput>
        <NumberInput label="currentBid" source="currentBid" />
        <DateTimeInput label="endTime" source="endTime" />
        <NumberInput label="entryFee" source="entryFee" />
        <DateTimeInput label="startTime" source="startTime" />
      </SimpleForm>
    </Create>
  );
};

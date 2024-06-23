import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { CAR_TITLE_FIELD } from "./CarTitle";

export const CarShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="imageUrl" source="imageUrl" />
        <TextField label="make" source="make" />
        <TextField label="model" source="model" />
        <TextField label="startPrice" source="startPrice" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="year" source="year" />
        <ReferenceManyField reference="Auction" target="carId" label="Auctions">
          <Datagrid rowClick="show">
            <ReferenceField label="Car" source="car.id" reference="Car">
              <TextField source={CAR_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="createdAt" label="Created At" />
            <TextField label="currentBid" source="currentBid" />
            <TextField label="endTime" source="endTime" />
            <TextField label="entryFee" source="entryFee" />
            <TextField label="ID" source="id" />
            <TextField label="startTime" source="startTime" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};

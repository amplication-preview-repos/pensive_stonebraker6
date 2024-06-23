import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  ReferenceField,
  TextField,
  DateField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { CAR_TITLE_FIELD } from "../car/CarTitle";

export const AuctionList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Auctions"}
      perPage={50}
      pagination={<Pagination />}
    >
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
    </List>
  );
};

import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  ReferenceField,
  TextField,
  DateField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { AUCTION_TITLE_FIELD } from "./AuctionTitle";
import { USER_TITLE_FIELD } from "../user/UserTitle";
import { CAR_TITLE_FIELD } from "../car/CarTitle";

export const AuctionShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
        <ReferenceManyField reference="Bid" target="auctionId" label="Bids">
          <Datagrid rowClick="show">
            <TextField label="amount" source="amount" />
            <ReferenceField
              label="Auction"
              source="auction.id"
              reference="Auction"
            >
              <TextField source={AUCTION_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <DateField source="updatedAt" label="Updated At" />
            <ReferenceField label="User" source="user.id" reference="User">
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};

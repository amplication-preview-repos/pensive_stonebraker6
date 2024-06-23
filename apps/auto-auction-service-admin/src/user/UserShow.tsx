import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { AUCTION_TITLE_FIELD } from "../auction/AuctionTitle";
import { USER_TITLE_FIELD } from "./UserTitle";
import { PROFESSION_TITLE_FIELD } from "../profession/ProfessionTitle";

export const UserShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
        <ReferenceManyField reference="Bid" target="userId" label="Bids">
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

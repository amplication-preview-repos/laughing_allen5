import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { AGENT_TITLE_FIELD } from "../agent/AgentTitle";
import { CLIENT_TITLE_FIELD } from "../client/ClientTitle";
import { PROPERTY_TITLE_FIELD } from "./PropertyTitle";

export const PropertyShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Address" source="address" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="Description" source="description" />
        <TextField label="ID" source="id" />
        <TextField label="Price" source="price" />
        <TextField label="Status" source="status" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="Appointment"
          target="propertyId"
          label="Appointments"
        >
          <Datagrid rowClick="show">
            <ReferenceField label="Agent" source="agent.id" reference="Agent">
              <TextField source={AGENT_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="Client"
              source="client.id"
              reference="Client"
            >
              <TextField source={CLIENT_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="createdAt" label="Created At" />
            <TextField label="Date" source="date" />
            <TextField label="ID" source="id" />
            <ReferenceField
              label="Property"
              source="property.id"
              reference="Property"
            >
              <TextField source={PROPERTY_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Time" source="time" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="Client"
          target="propertyId"
          label="Clients"
        >
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <TextField label="Email" source="email" />
            <TextField label="ID" source="id" />
            <TextField label="Name" source="name" />
            <TextField label="PhoneNumber" source="phoneNumber" />
            <ReferenceField
              label="Property"
              source="property.id"
              reference="Property"
            >
              <TextField source={PROPERTY_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};

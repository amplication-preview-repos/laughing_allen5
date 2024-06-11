import { AppointmentUpdateManyWithoutClientsInput } from "./AppointmentUpdateManyWithoutClientsInput";
import { PropertyWhereUniqueInput } from "../property/PropertyWhereUniqueInput";

export type ClientUpdateInput = {
  appointments?: AppointmentUpdateManyWithoutClientsInput;
  email?: string | null;
  name?: string | null;
  phoneNumber?: string | null;
  property?: PropertyWhereUniqueInput | null;
};

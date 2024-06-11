import { AppointmentUpdateManyWithoutPropertiesInput } from "./AppointmentUpdateManyWithoutPropertiesInput";
import { ClientUpdateManyWithoutPropertiesInput } from "./ClientUpdateManyWithoutPropertiesInput";

export type PropertyUpdateInput = {
  address?: string | null;
  appointments?: AppointmentUpdateManyWithoutPropertiesInput;
  clients?: ClientUpdateManyWithoutPropertiesInput;
  description?: string | null;
  price?: number | null;
  status?: "Option1" | null;
};

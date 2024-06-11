import { AppointmentCreateNestedManyWithoutPropertiesInput } from "./AppointmentCreateNestedManyWithoutPropertiesInput";
import { ClientCreateNestedManyWithoutPropertiesInput } from "./ClientCreateNestedManyWithoutPropertiesInput";

export type PropertyCreateInput = {
  address?: string | null;
  appointments?: AppointmentCreateNestedManyWithoutPropertiesInput;
  clients?: ClientCreateNestedManyWithoutPropertiesInput;
  description?: string | null;
  price?: number | null;
  status?: "Option1" | null;
};

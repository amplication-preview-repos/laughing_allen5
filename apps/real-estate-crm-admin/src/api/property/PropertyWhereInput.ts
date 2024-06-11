import { StringNullableFilter } from "../../util/StringNullableFilter";
import { AppointmentListRelationFilter } from "../appointment/AppointmentListRelationFilter";
import { ClientListRelationFilter } from "../client/ClientListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";

export type PropertyWhereInput = {
  address?: StringNullableFilter;
  appointments?: AppointmentListRelationFilter;
  clients?: ClientListRelationFilter;
  description?: StringNullableFilter;
  id?: StringFilter;
  price?: FloatNullableFilter;
  status?: "Option1";
};

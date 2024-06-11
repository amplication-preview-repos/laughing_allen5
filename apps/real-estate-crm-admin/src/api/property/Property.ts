import { Appointment } from "../appointment/Appointment";
import { Client } from "../client/Client";

export type Property = {
  address: string | null;
  appointments?: Array<Appointment>;
  clients?: Array<Client>;
  createdAt: Date;
  description: string | null;
  id: string;
  price: number | null;
  status?: "Option1" | null;
  updatedAt: Date;
};

"use client";

import { ColumnDef } from "@tanstack/react-table";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Line = {
  id: string;
  bank: string;
  limit: number;
  balance: number;
  utilization: number;
  age: string;
  closingDate: string;
  price: number;
  slots: number;
};

export const columns: ColumnDef<Line>[] = [
  {
    accessorKey: "bank",
    header: "Bank",
  },
  {
    accessorKey: "limit",
    header: "Limit",
  },
  {
    accessorKey: "balance",
    header: "Balance",
  },
  {
    accessorKey: "utilization",
    header: "Utilization",
  },
  {
    accessorKey: "age",
    header: "Age",
  },
  {
    accessorKey: "closingDate",
    header: "Closing Date",
  },
  {
    accessorKey: "price",
    header: "Price",
  },
  {
    accessorKey: "slots",
    header: "Slots",
  },
];

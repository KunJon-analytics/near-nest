"use client";

import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn, getReservationColor } from "@/lib/utils";
import { ReservationReturnType } from "@/types";

import { ReservationRowDropdown } from "./reservation-row-dropdown";

export const columns: ColumnDef<ReservationReturnType>[] = [
  {
    id: "propertyTitle",
    accessorFn: (row) => {
      return row.property.title;
    },
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Property
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      const title = row.original.property.title;

      return <div>{title}</div>;
    },
  },
  {
    accessorKey: "checkInDate",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          CHECK IN DATE
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      const checkInDate = row.original.checkInDate;

      return <div>{checkInDate.toDateString()}</div>;
    },
  },
  {
    accessorKey: "checkOutDate",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          CHECK OUT DATE
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      const checkOutDate = row.original.checkOutDate;

      return <div>{checkOutDate.toDateString()}</div>;
    },
  },
  {
    accessorKey: "totalPrice",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          TOTAL PRICE (π)
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      return (
        <div className="font-medium text-slate-700 dark:text-navy-100 lg:px-5">
          {row.original.totalPrice}
        </div>
      );
    },
  },
  {
    id: "status",
    accessorFn: (row) => {
      return row.status;
    },
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Status
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      const status = row.original.status;
      const color = getReservationColor(status);

      return (
        <Badge
          className={cn("badge rounded-full", `bg-${color} dark:bg-${color}`)}
        >
          {status}
        </Badge>
      );
    },
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const { id } = row.original;

      return <ReservationRowDropdown id={id} />;
    },
  },
];

import Link from "next/link";
import { BookMarked, Building, LayoutDashboard, LogOut } from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import UserAvatar from "@/components/shared/user-avatar";
import { logout } from "@/actions/session";
import { Button } from "@/components/ui/button";
import { SessionData } from "@/lib/utils";

interface UserAccountNavProps extends React.HTMLAttributes<HTMLDivElement> {
  session: SessionData;
}

export function UserAccountNav({ session }: UserAccountNavProps) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <UserAvatar uuid={session.uuid} size={40} />
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <div className="flex items-center justify-start gap-2 p-2">
          <div className="flex flex-col space-y-1 leading-none">
            <p className="font-medium">@{session.username}</p>
          </div>
        </div>
        <DropdownMenuSeparator />
        <DropdownMenuItem asChild>
          <Link href="/dashboard" className="flex items-center space-x-2.5">
            <LayoutDashboard className="h-4 w-4" />
            <p className="text-sm">Dashboard</p>
          </Link>
        </DropdownMenuItem>
        {session.isHost && (
          <DropdownMenuItem asChild>
            <Link
              href="/dashboard/host/properties"
              className="flex items-center space-x-2.5"
            >
              <Building className="h-4 w-4" />
              <p className="text-sm">Manage Properties</p>
            </Link>
          </DropdownMenuItem>
        )}
        <DropdownMenuItem asChild>
          <Link
            href={
              session.isHost
                ? "/dashboard/host/reservations"
                : "/dashboard/reservations"
            }
            className="flex items-center space-x-2.5"
          >
            <BookMarked className="h-4 w-4" />
            <p className="text-sm">
              {session.isHost ? "Manage Reservations" : "See Reservations"}
            </p>
          </Link>
        </DropdownMenuItem>

        <DropdownMenuSeparator />
        <DropdownMenuItem className="cursor-pointer">
          <form action={logout}>
            <Button type="submit">
              <LogOut className="h-4 w-4 mr-4" />
              <p className="text-sm">Log out </p>
            </Button>
          </form>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

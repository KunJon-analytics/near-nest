import { MainNavItem } from "@/types";
import { SignInModal } from "@/components/shared/sign-in-modal";
import { getSession } from "@/actions/session";

import { MainNav } from "./main-nav";
import { UserAccountNav } from "./user-account-nav";
import HeaderContainer from "./header-container";

interface NavBarProps {
  items?: MainNavItem[];
  children?: React.ReactNode;
  rightElements?: React.ReactNode;
  scroll?: boolean;
}

export async function NavBar({
  items,
  children,
  rightElements,
  scroll = false,
}: NavBarProps) {
  const session = await getSession();
  return (
    <HeaderContainer scroll={scroll}>
      <div className="flex h-16 w-full items-center justify-between p-4">
        <MainNav items={items}>{children}</MainNav>

        <div className="flex items-center space-x-3">
          {rightElements}

          {session.isLoggedIn ? (
            <UserAccountNav session={session} />
          ) : (
            <SignInModal />
          )}
        </div>
      </div>
    </HeaderContainer>
  );
}

import Logo from "@/components/logo";
import ThemeSwither from "@/components/theme-switcher";
import { UserButton } from "@clerk/nextjs";
import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col min-h-screen mx-auto bg-background max-h-screen">
      <nav className="flex w-full container justify-between items-center h-[60px] py-2 mb-10">
        <Logo />
        <div className="flex gap-4 items-center">
          <UserButton afterSignOutUrl="/sign-in" />
        </div>
      </nav>
      <main className="flex w-full flex-grow">{children}</main>
    </div>
  );
};

export default Layout;

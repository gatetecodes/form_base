import Link from "next/link";
import React from "react";

const Logo = () => {
  return (
    <Link
      href={"/"}
      className="text-3xl font-semibold text-foreground  hover:cursor-pointer"
    >
      formbase <span className="text-orange-600 -ml-2 text-5xl">.</span>
    </Link>
  );
};

export default Logo;

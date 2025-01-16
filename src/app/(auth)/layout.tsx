import React from "react";
import Image from "next/image";

interface AuthLayoutProps {
  children: React.ReactNode;
}

const AuthLayout = ({ children }: AuthLayoutProps) => {
  return (
    <main>
      <Image src="/logo.svg" height={50} width={100} alt="Logo" />
      {children}
    </main>
  );
};

export default AuthLayout;

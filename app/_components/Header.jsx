"use client";
import { Button } from "@/components/ui/button";
import { signIn, useSession, signOut } from "next-auth/react";
import Image from "next/image";
import React, { useEffect } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

function Header() {
  const { data } = useSession();

  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <div className="p-5 shadow-sm flex justify-between">
      <div className="flex items-center gap-8">
        <Image
          src="/logo.jpg"
          alt="logo"
          width={70}
          height={70}
          className="rounded-full"
        />
        <div className="md:flex items-center gap-6 hidden">
          <h2 className="hover:scale-105 hover:text-primary cursor-pointer">
            Inicio
          </h2>
          <h2 className="hover:scale-105 hover:text-primary cursor-pointer">
            Servicios
          </h2>
          <h2 className="hover:scale-105 hover:text-primary cursor-pointer">
            Nosotros
          </h2>
        </div>
      </div>
      <div>
        {data?.user ? (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Image
                src={data?.user?.image}
                alt="user"
                width={60}
                height={60}
                className="rounded-full"
              />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>Mi cuenta</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Perfil</DropdownMenuItem>
              <DropdownMenuItem>Trabajos</DropdownMenuItem>
              <DropdownMenuItem>Solicitudes</DropdownMenuItem>
              <DropdownMenuItem onClick={()=>signOut()}>Cerrar sesion</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        ) : (
          <Button onClick={() => signIn("descope")}>Iniciar Sesion</Button>
        )}
      </div>
    </div>
  );
}

export default Header;

import React, { useState } from "react";
import Layout from "@/layout/Layout";
import { useRouter } from "next/router";
import MenuAccount from "@/components/Account/MenuAccount";
import FormAccount from "@/components/Account/FormAccount";
import Direcciones from "@/components/Account/Direcciones";
import Payments from "@/components/Account/Payments";

export default function Cuenta() {
  const [selected, setSelected] = useState("perfil");
  const data = useRouter();
  // const id = data.query.producto;

  console.log(selected);

  return (
    <Layout>
      <div className="min-h-screen px-12 md:px-48 lg:px-64 py-10 md:py-0">
        <div className="flex w-full justify-between py-10">
          <span />
          <h2 className="text-title text-xl font-semibold">
            Bienvenido <span className="text-primary">Usuario</span>!
          </h2>
        </div>
        <div className="flex space-x-10 w-full ">
          <MenuAccount selected={selected} setSelected={setSelected} />
          {selected === "perfil" && <FormAccount selected={selected} />}
          {selected === "direcciones" && <Direcciones selected={selected} />}
          {selected === "pagos" && <Payments selected={selected} />}
        </div>
      </div>
    </Layout>
  );
}

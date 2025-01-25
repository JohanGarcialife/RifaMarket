import React, { useState } from "react";
import { Form, Input, Button } from "@heroui/react";

export default function FormAccount() {
  const [action, setAction] = useState(null);
  return (
    <div className="w-full space-y-10 ">
      <p className="text-primary text-xl font-semibold">Editar tu Perfil</p>
      <Form
        className="w-full  flex flex-col gap-4"
        validationBehavior="native"
        onReset={() => setAction("reset")}
        onSubmit={(e) => {
          e.preventDefault();
          let data = Object.fromEntries(new FormData(e.currentTarget));

          setAction(`submit ${JSON.stringify(data)}`);
        }}
      >
        <div className="grid grid-cols-2 gap-5 w-full">
          <Input
            errorMessage="Por favor ingresa tu nombre"
            label="Nombre"
            labelPlacement="outside"
            name="name"
            placeholder="Nombre"
            type="text"
            classNames={{
              label: "!text-title font-semibold",
              input: ["text-title", "placeholder:text-title "],
            }}
            className="w-full"
          />
          <Input
            errorMessage="Porfavor ingresa tu apellido"
            label="Apellido"
            labelPlacement="outside"
            name="lastname"
            placeholder="Apellido"
            type="text"
            classNames={{
              label: "!text-title font-semibold",
              input: ["text-title", "placeholder:text-title "],
            }}
            className="w-full"
          />
          <Input
            errorMessage="Por favor ingresa un correo válido"
            label="Correo"
            labelPlacement="outside"
            name="correo"
            placeholder="Correo"
            type="email"
            classNames={{
              label: "!text-title font-semibold",
              input: ["text-title", "placeholder:text-title "],
            }}
            className="w-full"
          />

          <Input
            errorMessage="Indica una dirección válida"
            label="Dirección"
            labelPlacement="outside"
            name="direccion"
            placeholder="Dirección"
            type="text"
            classNames={{
              label: "!text-title font-semibold",
              input: ["text-title", "placeholder:text-title "],
            }}
            className="w-full"
          />
        </div>

        <div className="space-y-5 w-full">
          <Input
            errorMessage="Elige una contraseña válida"
            label="Cambio de Contraseña"
            labelPlacement="outside"
            name="contraseña"
            placeholder="Contraseña actual"
            type="password"
            classNames={{
              label: "!text-title font-semibold",
              input: ["text-title", "placeholder:text-title "],
            }}
          />
          <Input
            errorMessage="La nueva contraseña no coincide"
            name="contraseña"
            placeholder="Nueva contraseña"
            type="password"
            classNames={{
              label: "!text-title font-semibold",
              input: ["text-title", "placeholder:text-title "],
            }}
          />
          <Input
            errorMessage="La nueva contraseña no coincide"
            name="contraseña"
            placeholder="Confirmar nueva contraseña"
            type="password"
            classNames={{
              label: "!text-title font-semibold",
              input: ["text-title", "placeholder:text-title "],
            }}
          />
        </div>
        <div className="flex w-full justify-end">
          <Button color="primary" type="submit">
            Actualizar
          </Button>
        </div>
      </Form>
    </div>
  );
}

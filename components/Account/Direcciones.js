import React, { useState } from "react";
import { Button, Form, Input, Textarea } from "@heroui/react";

export default function Direcciones() {
  const [action, setAction] = useState(null);
  return (
    <div className="w-full space-y-10 ">
      <p className="text-primary text-xl font-semibold">
        Administra tus Direcciones
      </p>
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
            placeholder="Nombre de la dirección"
            type="text"
            classNames={{
              label: "!text-title font-semibold",
              input: ["text-title", "placeholder:text-title "],
            }}
            className="w-full"
          />
          <Input
            errorMessage="Por favor ingresa un estado"
            label="Estado"
            labelPlacement="outside"
            name="estado"
            placeholder="Ingresa un estado"
            type="text"
            classNames={{
              label: "!text-title font-semibold",
              input: ["text-title", "placeholder:text-title "],
            }}
            className="w-full"
          />
          <Input
            errorMessage="Por favor ingresa una parroquia"
            label="Parroquia"
            labelPlacement="outside"
            name="parroquia"
            placeholder="Ingresa una parroquia"
            type="text"
            classNames={{
              label: "!text-title font-semibold",
              input: ["text-title", "placeholder:text-title "],
            }}
            className="w-full"
          />

          <Input
            errorMessage="Indica una dirección válida"
            label="Calle"
            labelPlacement="outside"
            name="calle"
            placeholder="Ingresa una calle"
            type="text"
            classNames={{
              label: "!text-title font-semibold",
              input: ["text-title", "placeholder:text-title "],
            }}
            className="w-full"
          />
        </div>

        <div className="space-y-5 w-full">
          <Textarea
            errorMessage="Indicaciones para la entrega"
            label="Detalles de ubicación"
            labelPlacement="outside"
            name="indicaciones"
            placeholder="Indicaciones para la entrega"
            classNames={{
              label: "!text-title font-semibold",
              input: ["text-title", "placeholder:text-title "],
            }}
          />
        </div>
        <div className="flex w-full justify-end">
          <Button color="primary" type="submit">
            Añadir Dirección
          </Button>
        </div>
      </Form>
    </div>
  );
}

import React from "react";
import { Listbox, ListboxItem } from "@heroui/react";

export default function MenuAccount(props) {
  const { selected, setSelected } = props;

  return (
    <div className="w-1/4 space-y-5">
      /
      <div>
        <p className="text-title font-semibold">Manejar mi Cuenta</p>

        <Listbox disallowEmptySelection selectionMode="single" variant="flat">
          <ListboxItem key="perfil" onPress={() => setSelected("perfil")}>
            <p
              className={
                selected === "perfil"
                  ? "text-primary font-semibold"
                  : "text-title/50 font-semibold"
              }
            >
              Manejar Perfil
            </p>
          </ListboxItem>
          <ListboxItem
            key="direcciones"
            onPress={() => setSelected("direcciones")}
          >
            <p
              className={
                selected === "direcciones"
                  ? "text-primary font-semibold"
                  : "text-title/50 font-semibold"
              }
            >
              Mis Direcciones
            </p>
          </ListboxItem>
          <ListboxItem key="pagos" onPress={() => setSelected("pagos")}>
            <p
              className={
                selected === "pagos"
                  ? "text-primary font-semibold"
                  : "text-title/50 font-semibold"
              }
            >
              Métodos de Pago
            </p>
          </ListboxItem>
        </Listbox>
      </div>
      <div>
        <p className="text-title font-semibold">Mis Rifas</p>

        <Listbox disallowEmptySelection selectionMode="single" variant="flat">
          <ListboxItem key="tickets" onPress={() => setSelected("tickets")}>
            <p
              className={
                selected === "tickets"
                  ? "text-primary font-semibold"
                  : "text-title/50 font-semibold"
              }
            >
              Tickets Activos
            </p>
          </ListboxItem>
          <ListboxItem
            key="rifas-ganadas"
            onPress={() => setSelected("rifas-ganadas")}
          >
            <p
              className={
                selected === "rifas-ganadas"
                  ? "text-primary font-semibold"
                  : "text-title/50 font-semibold"
              }
            >
              Rifas Ganadas
            </p>
          </ListboxItem>
          <ListboxItem
            key="historial-rifas"
            onPress={() => setSelected("historial-rifas")}
          >
            <p
              className={
                selected === "historial-rifas"
                  ? "text-primary font-semibold"
                  : "text-title/50 font-semibold"
              }
            >
              Historial de Rifas
            </p>
          </ListboxItem>
        </Listbox>
      </div>
    </div>
  );
}

import React from "react";
import { Button, Image, Input } from "@nextui-org/react";
import { LuSendHorizontal } from "react-icons/lu";
import { BsWhatsapp } from "react-icons/bs";

export default function Footer() {
  return (
    <div className=" bg-black px-12 md:px-48 lg:px-64 ">
      <div className="py-10  w-full grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-10">
        <div className="space-y-3 md:space-y-5 text-left">
          <h2 className="text-white font-semibold text-2xl">RifaMarket</h2>
          <p className="text-white">Subscribete</p>
          <Input
            label="Correo"
            radius="sm"
            labelPlacement="inside"
            variant="bordered"
            placeholder="Ingresa tu correo"
            endContent={
              <LuSendHorizontal className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
            }
            type="email"
          />
        </div>
        <div className="space-y-5">
          <h2 className="text-white font-semibold text-2xl">Soporte</h2>
          <p className="text-white">
            Contáctanos a través de whatsapp o nuestro formulario de contacto y
            con gusto te atenderemos!
          </p>
          <Button className="w-full" size="lg">
            Ir a Contacto
          </Button>
          <Button
            color="success"
            size="lg"
            className="w-full"
            startContent={<BsWhatsapp />}
          >
            Whatsapp
          </Button>
        </div>
        <div className="space-y-5">
          <h2 className="text-white font-semibold text-2xl">Cuenta</h2>
          <p className="text-white hover:opacity-50 cursor-pointer">
            Mi Cuenta
          </p>
          <p className="text-white hover:opacity-50 cursor-pointer">
            Iniciar Sesión / Registro
          </p>
          <p className="text-white hover:opacity-50 cursor-pointer">Carrito</p>
        </div>
        <div className="space-y-5">
          <h2 className="text-white font-semibold text-2xl">Acceso rápido</h2>
          <p className="text-white hover:opacity-50 cursor-pointer">
            Política de Privacidad
          </p>
          <p className="text-white hover:opacity-50 cursor-pointer">
            Términos de Uso
          </p>
          <p className="text-white hover:opacity-50 cursor-pointer">
            Preguntas Frecuentes
          </p>
        </div>
        <div className="space-y-5">
          <h2 className="text-white font-semibold text-2xl">Descarga la App</h2>
          <Image
            alt="Google Play"
            src="https://fnqpaoabomsyxpojrdvg.supabase.co/storage/v1/object/public/badges/Google_Play.png"
            width={320}
            height={65}
            className="p-2"
          />
          <Image
            alt="Apple App Store"
            src="https://fnqpaoabomsyxpojrdvg.supabase.co/storage/v1/object/public/badges/App_Store.png"
            width={320}
            height={65}
            className="p-2"
          />
        </div>
      </div>
    </div>
  );
}

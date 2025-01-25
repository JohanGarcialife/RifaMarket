import React, { useState } from "react";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Image,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
} from "@heroui/react";
import { IoIosArrowForward } from "react-icons/io";
import Tarjeta from "./PaymentForm/Tarjeta";
import PagoMovil from "./PaymentForm/PagoMovil";
import Paypal from "./PaymentForm/Paypal";
import Transferencia from "./PaymentForm/Transferencia";
import Zelle from "./PaymentForm/Zelle";
import Criptomonedas from "./PaymentForm/Criptomonedas";

export default function Payments() {
  const [paymentMethod, setPaymentMethod] = useState("zelle");
  const { isOpen, onOpen, onClose } = useDisclosure();

  const metodos = [
    {
      title: "Tarjeta de Crédito/Debito",
      img: "https://cdn-icons-png.flaticon.com/512/1087/1087080.png",
    },
    {
      title: "Pago Móvil",
      img: "https://cdn-icons-png.flaticon.com/512/4771/4771399.png",
    },
    {
      title: "Paypal",
      img: "https://cdn-icons-png.flaticon.com/512/174/174861.png",
    },
    {
      title: "Zelle",
      img: "https://yogaadventuresworldwide.com/wp-content/uploads/2019/09/zelle-icon.png",
    },
    {
      title: "Transferencia Bancaria",
      img: "https://cdn-icons-png.flaticon.com/512/6404/6404655.png",
    },
    {
      title: "Criptomonedas",
      img: "https://cdn-icons-png.flaticon.com/512/1978/1978543.png",
    },
  ];

  const handleOpen = (payment) => {
    console.log(payment);

    setPaymentMethod(payment);
    onOpen();
  };

  return (
    <div className="w-full space-y-10 ">
      <p className="text-primary text-xl font-semibold">
        Administra tus Métodos de Pago
      </p>
      <div className="gap-5 grid grid-cols-6">
        {metodos.map((item, index) => (
          <Card
            key={index}
            isPressable
            shadow="sm"
            onPress={() => handleOpen(item.title)}
          >
            <CardBody className="overflow-visible p-0">
              <Image
                alt={item.title}
                className="w-full object-contain "
                radius="lg"
                shadow="sm"
                src={item.img}
                width="100%"
                height="100%"
              />
            </CardBody>
            <CardFooter className="text-small justify-between">
              <p className="text-title font-semibold">{item.title}</p>
              <IoIosArrowForward className="text-title font-semibold" />
            </CardFooter>
          </Card>
        ))}
      </div>
      <Modal backdrop="blur" isOpen={isOpen} onClose={onClose}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                <p className="text-primary text-3xl"> {paymentMethod} </p>
              </ModalHeader>
              <ModalBody>
                {paymentMethod === "Tarjeta de Crédito/Debito" && <Tarjeta />}
                {paymentMethod === "Pago Móvil" && <PagoMovil />}
                {paymentMethod === "Paypal" && <Paypal />}
                {paymentMethod === "Transferencia Bancaria" && (
                  <Transferencia />
                )}
                {paymentMethod === "Zelle" && <Zelle />}
                {paymentMethod === "Criptomonedas" && <Criptomonedas />}
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Cerrar
                </Button>
                <Button color="primary" onPress={onClose}>
                  Añadir
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
}

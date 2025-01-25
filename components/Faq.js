import React, { useEffect, useState } from "react";
import { Accordion, AccordionItem } from "@heroui/react";
import Encabezado from "./Encabezado";
import { getFaqApi } from "@/supabase/Supabase";

export default function Faq(props) {
  const { title, subtitle } = props;
  const [preguntas, setPreguntas] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await getFaqApi();
      setPreguntas(response);
    })();
  }, []);

  return (
    <div className=" py-10  space-y-10  px-12 md:px-48 lg:px-64">
      <Encabezado title={title} subtitle={subtitle} />
      <Accordion>
        {preguntas?.map((pregunta) => (
          <AccordionItem
            key={pregunta.id}
            aria-label={pregunta.pregunta}
            title={
              <p className="text-primary text-2xl font-semibold">
                {pregunta.pregunta}
              </p>
            }
          >
            <p className="text-title text-lg ">{pregunta.respuesta}</p>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}

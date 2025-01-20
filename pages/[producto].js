import React, { useEffect, useState } from "react";
import Layout from "@/layout/Layout";
import { useRouter } from "next/router";
import { getProductoByIdApi } from "@/supabase/Supabase";
import { Button, Image } from "@nextui-org/react";

export default function Producto() {
  const data = useRouter();
  const id = data.query.producto;
  const [producto, setProducto] = useState(null);
  useEffect(() => {
    (async () => {
      const response = await getProductoByIdApi(id);
      setProducto(response[0]);
    })();
  }, [id]);

  return (
    <Layout className="min-h-screen">
      <div className="bg-bg md:min-h-screen">
        <div className="p-10">
          <div className="lg:max-w-6xl max-w-xl mx-auto">
            <div className="grid items-start grid-cols-1 lg:grid-cols-2 gap-8 max-lg:gap-12 max-sm:gap-8">
              <div className="w-full lg:sticky top-0">
                <div className="flex flex-row gap-2">
                  <div className="flex flex-col gap-2 w-16 max-sm:w-14 shrink-0">
                    <Image
                      src="https://readymadeui.com/images/fashion-img-1.webp"
                      alt="Product1"
                      className="aspect-[64/85] object-cover object-top w-full cursor-pointer  border-b-2 border-black"
                    />
                    <Image
                      src="https://readymadeui.com/images/fashion-img-2.webp"
                      alt="Product2"
                      className="aspect-[64/85] object-cover object-top w-full cursor-pointer  border-b-2 border-transparent"
                    />
                    <Image
                      src="https://readymadeui.com/images/fashion-img-3.webp"
                      alt="Product3"
                      className="aspect-[64/85] object-cover object-top w-full cursor-pointer  border-b-2 border-transparent"
                    />
                    <Image
                      src="https://readymadeui.com/images/fashion-img-4.webp"
                      alt="Product4"
                      className="aspect-[64/85] object-cover object-top w-full cursor-pointer  border-b-2 border-transparent"
                    />
                  </div>
                  <div className="flex-1">
                    <Image
                      isZoomed
                      src={producto?.image}
                      alt="Producto"
                      className="w-full  aspect-[548/712] object-cover"
                    />
                  </div>
                </div>
              </div>

              <div className="w-full">
                <div>
                  <h3 className="text-lg md:text-3xl font-bold text-title">
                    {producto?.name}
                  </h3>
                  <div className="flex items-center flex-wrap gap-4 mt-4">
                    <h4 className="text-title text-2xl sm:text-3xl font-bold">
                      ${producto?.ticketPrice}
                    </h4>
                  </div>
                </div>

                <hr className="my-6 border-gray-300" />

                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-title">
                    Sizes
                  </h3>
                  <div className="flex flex-wrap gap-4 mt-4">
                    <Button
                      className="w-10 h-9 text-sm text-title flex items-center justify-center shrink-0"
                      variant="bordered"
                    >
                      SM
                    </Button>
                    <Button
                      className="w-10 h-9 text-sm text-title flex items-center justify-center shrink-0"
                      variant="bordered"
                    >
                      MD
                    </Button>
                    <Button
                      className="w-10 h-9 text-sm text-title flex items-center justify-center shrink-0"
                      variant="bordered"
                    >
                      LG
                    </Button>
                    <Button
                      className="w-10 h-9 text-sm text-title flex items-center justify-center shrink-0"
                      variant="bordered"
                    >
                      XL
                    </Button>
                  </div>

                  <div className="mt-6 flex flex-wrap gap-4">
                    <Button
                      variant="bordered"
                      className="px-4 py-3 w-[45%]  text-title text-sm font-semibold  "
                    >
                      Añadir a Favoritos
                    </Button>
                    <Button className="px-4 py-3 w-[45%] border border-primary bg-primary  text-white text-sm font-semibold  ">
                      Comprar Ticket
                    </Button>
                  </div>
                </div>

                <hr className="my-6 border-gray-300" />

                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-title">
                    Detalles del Producto
                  </h3>
                  <div className="mt-2">
                    <p className="text-gray-600 font-semibold">
                      {producto?.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

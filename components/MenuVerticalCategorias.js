import React, { useEffect, useState } from "react";
import { getCategoriasApi } from "../supabase/Supabase";
import {
  Button,
  ButtonGroup,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@heroui/react";

export default function MenuVerticalCategorias() {
  const [categorias, setCategorias] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await getCategoriasApi();
      setCategorias(response);
    })();
  }, []);

  return (
    <div className="flex md:justify-end w-full">
      <div className=" flex flex-col space-y-1 md:space-y-3 md:border-r md:pr-5 md:border-gris/50 items-start ">
        {categorias?.map((categoria) => (
          <>
            {categoria.subcategorias === null ? (
              <Button variant="light">
                <p className="text-title text-xl font-semibold">
                  {categoria.name}
                </p>
              </Button>
            ) : (
              <ButtonGroup key={categoria.id} variant="light">
                <Button>
                  <p className="text-title text-xl font-semibold">
                    {categoria.name}
                  </p>
                </Button>
                <Dropdown placement="bottom-end">
                  <DropdownTrigger>
                    <Button isIconOnly>
                      <ChevronDownIcon />
                    </Button>
                  </DropdownTrigger>
                  <DropdownMenu
                    disallowEmptySelection
                    aria-label=""
                    className=""
                    selectionMode="single"
                  >
                    {categoria.subcategorias?.map((subcategoria) => (
                      <DropdownItem key={subcategoria}>
                        <p className="text-body text-lg font-semibold">
                          {subcategoria}
                        </p>
                      </DropdownItem>
                    ))}
                  </DropdownMenu>
                </Dropdown>
              </ButtonGroup>
            )}
          </>
        ))}
      </div>
    </div>
  );
}

export const ChevronDownIcon = () => {
  return (
    <svg
      fill="none"
      height="14"
      viewBox="0 0 24 24"
      width="14"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M17.9188 8.17969H11.6888H6.07877C5.11877 8.17969 4.63877 9.33969 5.31877 10.0197L10.4988 15.1997C11.3288 16.0297 12.6788 16.0297 13.5088 15.1997L15.4788 13.2297L18.6888 10.0197C19.3588 9.33969 18.8788 8.17969 17.9188 8.17969Z"
        fill="currentColor"
      />
    </svg>
  );
};

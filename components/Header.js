import React, { useState } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Input,
  DropdownItem,
  DropdownTrigger,
  Dropdown,
  DropdownMenu,
  Avatar,
} from "@nextui-org/react";
import Logo from "../public/logo.svg";
import Image from "next/image";

export default function Header() {
  const menuItems = [
    { name: "Home", link: "#home" },
    { name: "About Us", link: "#aboutUs" },
    { name: "Services", link: "#services" },
    { name: "Why Choose Us", link: "#whyChooseUs" },
    { name: "Portfolio", link: "#portfolio" },
    { name: "Testimonials", link: "#testimonials" },
    { name: "Contact", link: "#contact" },
  ];

  return (
    <Navbar isBordered>
      <NavbarContent justify="start">
        <NavbarBrand className="mr-4">
          <Link color="title" href="/">
            <Image src={Logo} alt="Logo" width={100} height={100} />
          </Link>
        </NavbarBrand>
        <NavbarContent className="hidden sm:flex gap-3">
          <NavbarItem>
            <Link color="title" href="/">
              <p className="text-title font-semibold">Home</p>
            </Link>
          </NavbarItem>
          <NavbarItem isActive>
            <Link aria-current="page" color="primary" href="#">
              <p className="text-title font-semibold">Contacto</p>
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link color="title" href="#">
              <p className="text-title font-semibold">Sobre Nosotros</p>
            </Link>
          </NavbarItem>
        </NavbarContent>
      </NavbarContent>

      <NavbarContent as="div" className="items-center" justify="end">
        <Input
          classNames={{
            base: "max-w-full sm:max-w-[10rem] h-10",
            mainWrapper: "h-full",
            input: "text-small",
            inputWrapper: "h-full font-normal text-body bg-input ",
          }}
          placeholder="Buscar producto..."
          size="sm"
          startContent={<SearchIcon size={18} />}
          type="search"
        />
        <Dropdown placement="bottom-end">
          <DropdownTrigger>
            <Avatar
              isBordered
              as="button"
              className="transition-transform"
              color="#5F2EEA"
              name="Jason Hughes"
              size="sm"
              src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
            />
          </DropdownTrigger>
          <DropdownMenu aria-label="Profile Actions" variant="flat">
            <DropdownItem key="profile" className="h-14 gap-2">
              <p className="text-title font-semibold">Hola! Usuario</p>
              <p className="text-title font-semibold">zoey@example.com</p>
            </DropdownItem>
            <DropdownItem key="settings">
              <p className="text-title font-semibold">Mi cuenta</p>
            </DropdownItem>
            <DropdownItem
              key="team_settings"
              className="text-title font-semibold"
            >
              <p className="text-title font-semibold">Mis tickets</p>
            </DropdownItem>
            <DropdownItem
              key="configurations"
              className="text-title font-semibold"
            >
              <p className="text-title font-semibold">Configuración</p>
            </DropdownItem>
            <DropdownItem key="help_and_feedback">
              <p className="text-title font-semibold">Ayuda & Feedback</p>
            </DropdownItem>
            <DropdownItem
              key="logout"
              color="danger"
              className="text-error font-semibold"
            >
              <p>Salir</p>
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </NavbarContent>
    </Navbar>
    // <>
    //   <Navbar
    //     isMenuOpen={isMenuOpen}
    //     onMenuOpenChange={setIsMenuOpen}
    //     isBlurred={true}
    //     className="bg-transparent z-50"
    //   >
    //     <NavbarContent>
    //       <NavbarMenuToggle
    //         aria-label={isMenuOpen ? "Close menu" : "Open menu"}
    //         className="sm:hidden"
    //       />
    //       <NavbarBrand>
    //         <Image src={Logo} alt="Logo" width={100} height={100} />
    //       </NavbarBrand>
    //     </NavbarContent>

    //     <NavbarContent className="hidden sm:flex gap-4" justify="center">
    //       <NavbarItem>
    //         <Link color="foreground" href="#home">
    //           <p className="text-title font-semibold">Home</p>
    //         </Link>
    //       </NavbarItem>
    //       <NavbarItem>
    //         <Link aria-current="page" href="#aboutUs">
    //           <p className="text-title font-semibold">Categoría</p>
    //         </Link>
    //       </NavbarItem>
    //       <NavbarItem>
    //         <Link aria-current="page" href="#services">
    //           <p className="text-title font-semibold">Categoría</p>
    //         </Link>
    //       </NavbarItem>

    //       <NavbarItem>
    //         <Link color="foreground" href="#whyChooseUs">
    //           <p className="text-title font-semibold">Categoría</p>
    //         </Link>
    //       </NavbarItem>
    //       <NavbarItem>
    //         <Link color="foreground" href="#portfolio">
    //           <p className="text-title font-semibold">Categoría</p>
    //         </Link>
    //       </NavbarItem>
    //       <NavbarItem>
    //         <Link color="foreground" href="#testimonials">
    //           <p className="text-title font-semibold">Categoría</p>
    //         </Link>
    //       </NavbarItem>
    //       <NavbarItem>
    //         <Link color="foreground" href="#contact">
    //           <p className="text-title font-semibold">Categoría</p>
    //         </Link>
    //       </NavbarItem>
    //     </NavbarContent>

    //     <NavbarContent justify="end">
    //       <NavbarItem className="hidden lg:flex">
    //         <Button color="primary" variant="light" onPress={openModalSignIn}>
    //           <p className="text-title font-semibold ">Login</p>
    //         </Button>
    //       </NavbarItem>
    //       <NavbarItem>
    //         <Button color="primary" variant="shadow" onPress={openModalSignUp}>
    //           <p className="text-title font-semibold ">Sign Up</p>
    //         </Button>
    //       </NavbarItem>
    //     </NavbarContent>

    //     {/* Menu móvil */}
    //     <NavbarMenu className="flex-col items-center justify-center space-y-5">
    //       {menuItems.map((item, index) => (
    //         <NavbarMenuItem key={`${item}-${index}`}>
    //           <Link
    //             className="w-full"
    //             color={
    //               index === 2
    //                 ? "primary"
    //                 : index === menuItems.length - 1
    //                 ? "danger"
    //                 : "foreground"
    //             }
    //             href={item.link}
    //             size="lg"
    //             onPress={() => setIsMenuOpen(!isMenuOpen)}
    //           >
    //             <p className="text-azul text-4xl font-bold">{item.name}</p>
    //           </Link>
    //         </NavbarMenuItem>
    //       ))}
    //     </NavbarMenu>
    //   </Navbar>
    // </>
  );
}

export const SearchIcon = ({
  size = 24,
  strokeWidth = 1.5,
  width,
  height,
  ...props
}) => {
  return (
    <svg
      aria-hidden="true"
      fill="none"
      focusable="false"
      height={height || size}
      role="presentation"
      viewBox="0 0 24 24"
      width={width || size}
      {...props}
    >
      <path
        d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={strokeWidth}
      />
      <path
        d="M22 22L20 20"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={strokeWidth}
      />
    </svg>
  );
};

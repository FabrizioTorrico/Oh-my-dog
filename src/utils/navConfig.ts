import { UserRoles } from "@prisma/client";

export const LINKS = {
  home: "/",
  me: "/me",
  services: "/services",
  clients: "/admin/clients",
  signin: "/auth/signin",
  newPassword: "/auth/new-password",
  dogAssistance: "/dog-assistance",
  adoptions: "/dog-assistance/adoptions",
  crossBreeds: "/dog-assistance/cross-breeds",
  donationCampaigns: "/dog-assistance/donation-campaigns",
  lostDogs: "/dog-assistance/lost-dogs",
} as const;

const NAV_CONFIG = {
  home: { label: "Inicio", href: LINKS.home },
  /*   services: {
    label: "Servicios",
    href: LINKS.services,
    roles: [UserRoles.CLIENT, null],
  }, */
  admin: {
    label: "Administracion",
    href: "/admin",
    roles: [UserRoles.VET],
    children: {
      // services: { label: "Servicios", href: LINKS.services },
      clients: { label: "Clientes", href: LINKS.clients },
    },
  },
  dogAssistance: {
    label: "Asistencia de perros",
    href: "/dog-assistance",
    children: {
      adoptions: {
        label: "Adopciones",
        href: LINKS.adoptions,
      },
      /*       crossBreeds: {
        label: "Cruza",
        href: LINKS.crossBreeds,
        roles: ["Client"],
      },
      donationCampaigns: {
        label: "Campañas de donacion",
        href: LINKS.donationCampaigns,
      },
      lostDogs: {
        label: "Busqueda de perros",
        href: LINKS.lostDogs,
      }, */
    },
  },
  signin: { label: "Iniciar sesion", href: "/auth/signin" },
};

/* export const adminLinks = Object.values(NAV_CONFIG.admin.children).map(
  (child) => child.href
); */

export default NAV_CONFIG;

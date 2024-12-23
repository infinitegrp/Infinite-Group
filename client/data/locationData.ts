interface LocationData {
  title: string;
  subtitle: string;
  helpertext: string;
  icon: string;
  cover: string;
  href: string;
}

export const locationData: LocationData[] = [
  {
    title: "United Arab Emirates",
    subtitle: "Head Quarters",
    helpertext: `P. O. Box : 118467, 105-9, First Floor,\nAl Fajjer Complex, Umm Hurair Road,\nOud Metha, Dubai -  U.A.E.`,
    icon: "globe.svg",
    cover: "dubai.png",
    href: "/contact",
  },
  {
    title: "Qatar",
    subtitle: "Qatar",
    helpertext:
      "Icono View Building, C Ring Road, Building No.  46 Street 997. Zone 25,  Doha , Qatar",
    icon: "globe.svg",
    cover: "qatar.png",
    href: "/contact",
  },
  {
    title: "India",
    subtitle: "India",
    helpertext: "K. C. Building Mavelikkara, Alappuzha, Kerala - India",
    icon: "globe.svg",
    cover: "india.png",
    href: "/contact",
  },
  {
    title: "Sri lanka",
    subtitle: "Sri Lanka",
    helpertext:
      "68 D, Wettawa Kusala Galhenawatta, Raddelugama Siduwa, Sri Lanka - 11870",
    icon: "globe.svg",
    cover: "srilanka.jpg",
    href: "/contact",
  },
];

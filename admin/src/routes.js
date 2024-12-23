
import Contact from "pages/Contact";
import Subscription from "pages/subscription";
import Careers from "pages/Careers";
import Applications from "pages/Applications";
import Settings from "pages/Settings";
import Box from "components/Box";
import Blogs from "pages/Blogs";

const routes = [

  {
    type: "route",
    name: "Contact",
    key: "contact",
    route: "/contact",
    icon: <Box component="i" color="dark" fontSize="14px" className="ni ni-single-02" />,
    component: <Contact />,
  },
  {
    type: "route",
    name: "Subscribe",
    key: "subscribe",
    route: "/subscribe",
    icon: <Box component="i" color="dark" fontSize="14px" className="ni ni-single-02" />,
    component: <Subscription />,
  },

  {
    type: "route",
    name: "Careers",
    key: "Careers",
    route: "/careers",
    icon: <Box component="i" color="primary" fontSize="14px" className="ni ni-bulb-61" />,
    component: <Careers />,
  },

  {
    type: "route",
    name: "Applications",
    key: "applications",
    route: "/applications",
    icon: <Box component="i" color="warning" fontSize="14px" className="ni ni-cart" />,
    component: <Applications />,
  },
  {
    type: "route",
    name: "Blogs",
    key: "blogs",
    route: "/blogs",
    icon: <Box component="i" color="primary" fontSize="14px" className="ni ni-album-2" />,
    component: <Blogs />,
  },

  { type: "title", title: "Account Pages", key: "account-pages" },

  {
    type: "route",
    name: "Settings",
    key: "settings",
    route: "/settings",
    icon: <Box component="i" color="dark" fontSize="14px" className="ni ni-settings-gear-65" />,
    component: <Settings />,
  },
];

export default routes;

import { useState, useEffect, useMemo } from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Sidenav from "examples/Sidenav";
import theme from "assets/theme";
import themeRTL from "assets/theme/theme-rtl";
import themeDark from "assets/theme-dark";
import themeDarkRTL from "assets/theme-dark/theme-rtl";
import rtlPlugin from "stylis-plugin-rtl";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import routes from "routes";
import { useController, setMiniSidenav } from "context";
import brand from "assets/images/logo-ct.png";
import brandDark from "assets/images/logo-ct-dark.png";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
// import Footer from "examples/Footer";
import "assets/css/nucleo-icons.css";
import "assets/css/nucleo-svg.css";
import "assets/css/style.css";
import AddCareers from "pages/Careers/AddCareers";
import EditCareers from "pages/Careers/EditCareers";
import Details from "pages/Applications/Details";
import TableData from "pages/Applications/tableData";
import Login from "pages/Auth";
import AddBlog from "pages/Blogs/AddBlog";
import EditBlog from "pages/Blogs/EditBlog";


export default function App() {
  const [controller, dispatch] = useController();
  const { miniSidenav, direction, sidenavColor, darkSidenav, darkMode, auth } = controller;
  const [onMouseEnter, setOnMouseEnter] = useState(false);
  const [rtlCache, setRtlCache] = useState(null);
  const { pathname } = useLocation();

  // Cache for the rtl
  useMemo(() => {
    const cacheRtl = createCache({
      key: "rtl",
      stylisPlugins: [rtlPlugin],
    });

    setRtlCache(cacheRtl);
  }, []);

  // Open sidenav when mouse enter on mini sidenav
  const handleOnMouseEnter = () => {
    if (miniSidenav && !onMouseEnter) {
      setMiniSidenav(dispatch, false);
      setOnMouseEnter(true);
    }
  };

  // Close sidenav when mouse leave mini sidenav
  const handleOnMouseLeave = () => {
    if (onMouseEnter) {
      setMiniSidenav(dispatch, true);
      setOnMouseEnter(false);
    }
  };

  // Setting the dir attribute for the body element
  useEffect(() => {
    document.body.setAttribute("dir", direction);
  }, [direction]);

  // Setting page scroll to 0 when changing the route
  useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
  }, [pathname]);

  const getRoutes = (allRoutes) =>
    allRoutes.map((route) => {
      if (route.collapse) {
        return getRoutes(route.collapse);
      }

      if (route.route) {
        return <Route exact path={route.route} element={route.component} key={route.key} />;
      }

      return null;
    });

  return direction === "rtl" ? (
    <CacheProvider value={rtlCache}>
      <ThemeProvider theme={darkMode ? themeDarkRTL : themeRTL}>
        <CssBaseline />
        {!auth ? <Login /> :
          <>
            <Sidenav
              color={sidenavColor}
              brand={darkSidenav || darkMode ? brand : brandDark}
              brandName=" Admin Dashboard"
              routes={routes}
              onMouseEnter={handleOnMouseEnter}
              onMouseLeave={handleOnMouseLeave}
            />
            <DashboardLayout>
              <DashboardNavbar />
              <Routes>
                {getRoutes(routes)}
                <Route path="/careers/addCareers" element={<AddCareers />} />
                <Route path="/careers/editCareers/:id" element={<EditCareers />} />
                <Route path="/applications/details//:id" element={<Details />} />
                <Route path="/applications/tableData" element={<TableData />} />
                <Route path="/blogs/addBlog" element={<AddBlog />} />
                <Route path="/blogs/editBlog/:id" element={<EditBlog />} />
                <Route path="*" element={<Navigate to="/contact" />} />
              </Routes>
              {/* <Footer /> */}
            </DashboardLayout>
          </>}
      </ThemeProvider>
    </CacheProvider>
  ) : (
    <ThemeProvider theme={darkMode ? themeDark : theme}>
      <CssBaseline />
      {!auth ? <Login /> :
        <>
          <Sidenav
            color={sidenavColor}
            brand={darkSidenav || darkMode ? brand : brandDark}
            brandName=" Admin Dashboard"
            routes={routes}
            onMouseEnter={handleOnMouseEnter}
            onMouseLeave={handleOnMouseLeave}
          />
          <DashboardLayout>
            <DashboardNavbar />
            <Routes>
              {getRoutes(routes)}
              <Route path="/careers/addCareers" element={<AddCareers />} />
              <Route path="/careers/editCareers/:id" element={<EditCareers />} />
              <Route path="/applications/details/:id" element={<Details />} />
              <Route path="/applications/tableData" element={<TableData />} />
              <Route path="/blogs/addBlog" element={<AddBlog />} />
              <Route path="/blogs/editBlog/:id" element={<EditBlog />} />
              <Route path="*" element={<Navigate to="/contact" />} />
            </Routes>
            {/* <Footer />    */}
          </DashboardLayout>   
        </>
      }
    </ThemeProvider>
  );
}

import React, { useEffect, useMemo, useState } from "react";
import Layout from "./components/Layout.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import Home from "./pages/Home.jsx";
import Services from "./pages/Services.jsx";

const routes = {
  "/": { title: "Startsida", component: Home },
  "/services": { title: "Tjänster", component: Services },
  "/about": { title: "Om oss", component: About },
  "/contact": { title: "Kontakt", component: Contact },
};

function getCurrentPath() {
  const path = window.location.pathname;
  return routes[path] ? path : "/";
}

function App() {
  const [currentPath, setCurrentPath] = useState(getCurrentPath);
  const route = routes[currentPath] ?? routes["/"];
  const Page = route.component;

  const navigation = useMemo(
    () => [
      { path: "/", label: "Startsida" },
      { path: "/services", label: "Tjänster" },
      { path: "/about", label: "Om mig" },
      { path: "/contact", label: "Kontakt" },
    ],
    [],
  );

  useEffect(() => {
    document.title = `${route.title} | Andersson Projekt EF`;
  }, [route.title]);

  useEffect(() => {
    const handlePopState = () => setCurrentPath(getCurrentPath());
    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  function navigate(path) {
    if (path === currentPath) {
      return;
    }

    window.history.pushState({}, "", path);
    setCurrentPath(getCurrentPath());
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <Layout currentPath={currentPath} navigation={navigation} onNavigate={navigate}>
      <Page onNavigate={navigate} />
    </Layout>
  );
}

export default App;

import { useEffect } from "react";
import { useLocation } from "react-router-dom";

interface SEOHeadProps {
  title: string;
  description: string;
  type?: string;
  path?: string;
}

const SEOHead = ({ title, description, type = "website", path }: SEOHeadProps) => {
  const location = useLocation();
  const currentPath = path || location.pathname;
  const fullTitle = `${title} | FinanceHub`;

  useEffect(() => {
    document.title = fullTitle;

    const setMeta = (name: string, content: string, property = false) => {
      const attr = property ? "property" : "name";
      let el = document.querySelector(`meta[${attr}="${name}"]`);
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute(attr, name);
        document.head.appendChild(el);
      }
      el.setAttribute("content", content);
    };

    setMeta("description", description);
    setMeta("og:title", fullTitle, true);
    setMeta("og:description", description, true);
    setMeta("og:type", type, true);
    setMeta("og:url", `https://financehub.com${currentPath}`, true);
  }, [fullTitle, description, type, currentPath]);

  return null;
};

export default SEOHead;

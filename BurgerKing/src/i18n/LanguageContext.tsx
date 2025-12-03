import { createContext, useContext, useState } from "react";
import nl from "./nl.json";
import fr from "./fr.json";

const languages = { nl, fr };

const LanguageContext = createContext<any>(null);

export const LanguageProvider = ({ children }: any) => {
  const [lang, setLang] = useState("nl");

  const t = (key: string) => {
    const parts = key.split(".");
    let result = languages[lang];
    parts.forEach((p) => (result = result[p]));
    return result;
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);

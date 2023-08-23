// LanguageSelection.js

import { useState, useEffect } from "react";
import { getLanguages } from "../../src/api";
import { fetchLanguages } from "../../store/actions/actions";
import { useDispatch } from "react-redux";
import { FeaturedCard } from "../components/FeaturedCard";

export default function LanguageSelection() {
  const [languages, setLanguages] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchLanguages());
  }, []);

  useEffect(() => {
    getLanguages().then((languages) => setLanguages(languages));
    console.log(languages);
  }, []);

  return (
    <div>
      <h1>Select your language</h1>

      <div className="grid grid-cols-3 gap-4">
        {languages.map((language) => (
          <FeaturedCard key={language._id} languageTitle={language.name} />
        ))}
      </div>
    </div>
  );
}

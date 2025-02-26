import { LANGUAGE_VERSIONS } from "../constants";

const languages = Object.entries(LANGUAGE_VERSIONS);

function LanguageSelector({ onSelect }) {
  return (
    <div className="mb-4">
      <p className="mb-2 text-lg">Languages:</p>
      <select
        defaultValue="Pick a Framework"
        className="select focus:outline-none w-[150px]"
        onChange={(e) => onSelect(e.target.value)}
      >
        <option disabled={true}>Select Language</option>
        {languages.map(([language, version]) => (
          <option key={language} value={language}>
            {language} - {version}
          </option>
        ))}
      </select>
    </div>
  );
}

export default LanguageSelector;

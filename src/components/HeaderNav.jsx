/** @jsxImportSource @emotion/react */
import { HelpCircle, XCircle } from "react-feather";
import useEscape from "../hooks/useEscape";
import "../style/chatHeader.css";

export default function HeaderNav({ onSuggestionClick, suggestionsOpen }) {

  useEscape(() => {
    suggestionsOpen && onSuggestionClick();
  });

  const suggestionsToggle = suggestionsOpen ? (
    <XCircle size={30} className="helpIcon" onClick={() => onSuggestionClick()} />
  ) : (
    <HelpCircle
      className="helpIcon"
      size={30}
      onClick={() => onSuggestionClick()}
    />
  );

  return (
    <header className="chatHeader">

      <h2 className="chatHeaderTitle">
        {suggestionsOpen ? "How to Use Poppy" : "Swanton Pacific Ranch Chat" }
      </h2>

      {suggestionsToggle}
    </header>
  );
}

import React, { useState, useEffect } from "react";
import "./styles/style.css";
import Card from "react-bootstrap/Card";
import GenerateMetaTag from "./components/GenerateMetaTag";
import MetaTagForms from "./components/MetaTagForms";

const App = () => {
  //Adding state management
  const [metaTags, setMetaTags] = useState("");
  const [metaTagCollection, setMetaTagCollection] = useState({
    title: "",
    description: "",
    keyword: "",
    author: "",
    url: "",
    imageUrl: "",
  });

  return (
    <div>
      <h1>Meta Tag Generator</h1>
      <h2>Google</h2>
    </div>
  );
};

export default App;

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

  //useEffect
  useEffect(() => {}, { metaTagCollection });
  return (
    <div className="container mt-5">
      <title>Meta Tag Generator</title>
      <Card style={{ width: "100%" }}>
        <Card.Body>
          <h1 className="meta-tag-title">Meta Tag Generator</h1>
          <MetaTagForms
            metaTagCollection={metaTagCollection}
            setMetaTagCollection={setMetaTagCollection}
          ></MetaTagForms>
          <GenerateMetaTag />
        </Card.Body>
      </Card>
    </div>
  );
};

export default App;

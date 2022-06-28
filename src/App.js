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
    <div className="App-Container">
      <title>Meta Tag Generator</title>
      <Card style={{ width: "100%" }}>
        <Card.Body>
          <h1 className="meta-tag-title">Meta Tag Generator</h1>
          <MetaTagForms
            metaTagCollection={metaTagCollection}
            setMetaTagCollection={setMetaTagCollection}
          ></MetaTagForms>
        </Card.Body>
      </Card>
    </div>
  );
};

export default App;

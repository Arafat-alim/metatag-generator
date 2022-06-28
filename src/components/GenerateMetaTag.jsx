import React from "react";

const GenerateMetaTag = ({ metaTags }) => {
  return (
    <div className="mt-3">
      <h3>
        Meta Tag Generator
        <small className="text-danger">Select and Copy</small>
      </h3>
      <div className="generated-meta-tags">
        <pre>
          <code>{metaTags}</code>
        </pre>
      </div>
    </div>
  );
};

export default GenerateMetaTag;

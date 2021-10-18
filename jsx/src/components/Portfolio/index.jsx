// 1. IMPORT REACT
import React from "react";

// 2. ADDITIONAL IMPORTS
import { components } from "../../utils/utils";

// 3. CREATE A FUNCTION BASED COMPONENT
const Portfolio = () => {
  const allComponents = components.map((element) => {
    return element.component ? (
      <element.component
        componentName={element.component_name}
        key={element.component_name}
        id={element.component_name}
      />
    ) : null;
  });
  return <div className="container">{allComponents}</div>;
};

// 4. EXPORT COMPONENT TO BE USED IN OTHER PARTS OF OUR APPLICATION
export default Portfolio;

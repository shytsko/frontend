import "./App.css";
import Component from "./components/Component";
import Preloader from "./components/Preloader";
import { useState } from "react";

const withPreload = (WrappedComponent) => {
  return (props) => {
    if (props?.isLoading) {
      return <Preloader {...props} />;
    }
    return <WrappedComponent {...props} />;
  };
};

const ComponentWithPreload = withPreload(Component);

function App() {
  const [isLoading, setIsLoading] = useState(true);

  setTimeout(() => {
    setIsLoading(false);
  }, 3000);

  return (
    <>
      <ComponentWithPreload
        isLoading={isLoading}
        content={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi delectus
        fuga rerum ullam quod officia error maxime explicabo accusantium
        tempora`}
      />
    </>
  );
}

export default App;

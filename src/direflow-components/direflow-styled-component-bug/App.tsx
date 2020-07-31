import React, { FC, useContext } from "react";
import { EventContext, Styled } from "direflow-component";
import styles from "./App.css";
import { Button } from "./components/Button";

interface IProps {
  color: string;
  componentTitle: string;
  sampleList: string[];
}

const App: FC<IProps> = (props) => {
  const dispatch = useContext(EventContext);

  const handleClick = () => {
    const event = new Event("my-event");
    dispatch(event);
  };

  const renderSampleList = props.sampleList.map((sample: string) => (
    <div key={sample} className="sample-text">
      → {sample}
    </div>
  ));

  return (
    <Styled styles={styles}>
      <div className="app">
        <div className="top">
          <div className="header-image" />
        </div>
        <div className="bottom">
          <div className="header-title">Direflow Styled Component Bug</div>
          <div>{renderSampleList}</div>
          <Button color={props.color} onClick={handleClick}>
            {props.componentTitle}
          </Button>
        </div>
      </div>
    </Styled>
  );
};

App.defaultProps = {
  color: "#5781c2",
  componentTitle: "Click me!",
  sampleList: [
    "Create with React",
    "Build as Web Component",
    "Use it anywhere!",
  ],
};

export default App;

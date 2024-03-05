import React from "react";

const Filters = (props) => {
  const [activeTab, setActiveTab] = React.useState(props.state);

  React.useEffect(() => {
    const button = document.querySelector(`[value=${activeTab}]`);
    if (button === null) {
      return;
    } else {
      button.classList.add("activeButton");
    }
  }, [activeTab]);

  return (
    <button value={props.value} onClick={props.onClick}>
      {props.children}
    </button>
  );
};

export default Filters;

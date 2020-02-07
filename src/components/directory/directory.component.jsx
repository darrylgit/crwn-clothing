import React from "react";

import sections from "./directory.data";
import "./directory.styles.scss";
import MenuItem from "../menu-item/menu-item.component";

class Directory extends React.Component {
  constructor() {
    super();

    this.state = {
      sections
    };
  }

  render() {
    return (
      <div className="directory-menu">
        {this.state.sections.map(({ id, ...sectionProps }) => {
          return <MenuItem key={id} {...sectionProps} />;
        })}
      </div>
    );
  }
}

export default Directory;

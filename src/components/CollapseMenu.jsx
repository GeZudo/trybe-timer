import React from 'react';
import { IoLogoGithub, IoLogoLinkedin, IoIosArrowDroprightCircle } from "react-icons/io";

class CollapseMenu extends React.Component {
  constructor() {
    super();
    this.state = {
      collapsed: false,
    };
  }

  hadleClick = () => {
    const {collapsed} = this.state;
    this.setState({
      collapsed: !collapsed,
    });
  }

  render(){
    const {
      collapsed,
    } = this.state;

    return(
      <div className={ collapsed ? 'collapsed show' : 'collapsed' }>
        <IoIosArrowDroprightCircle onClick={ this.hadleClick } className={ collapsed ? 'collapseShow' : 'collapseNoShow' }/>
        <a href="https://www.linkedin.com/in/augusto-malves/" target="_blank" rel="noreferrer" className="item">
          <IoLogoLinkedin />
        </a>
        <a href="https://github.com/GeZudo" target="_blank" rel="noreferrer" className="item">
          <IoLogoGithub />
        </a>
      </div>
    )
  }
}

export default CollapseMenu;

import './style.css'
import React from 'react'

class Item extends React.Component {
  render() {
    const { srcImg, ImgName, title } = this.props;
    return (
      <div>
        <img className={ImgName} src={srcImg} alt={title} />
      </div>
    );
  }
}

export default Item;
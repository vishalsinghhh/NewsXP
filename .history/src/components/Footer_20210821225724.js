import React from 'react'

const Footer = () => {
    let copy = React.string({js|©|js});
    return (
      <div className="footer">
        <div className="footer-info">
          <p>Created By Vishal Singh</p>
          <div className="underline-footer"></div>
        </div>
      </div>
    );
}

export default Footer

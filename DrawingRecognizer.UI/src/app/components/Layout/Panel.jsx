import React, { useState } from 'react';
import styles from './Panel.module.css';

const Panel = ({ title, margin = "10px 100px", children }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const togglePanel = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className={styles.panel} style={{margin: margin}}>
      <div className={styles.panelHeader} onClick={togglePanel}>
        <h3>{title}</h3>
        <div className={`${styles.arrow} ${isExpanded ? styles.arrowExpanded : ''}`}>
          &#x25B6;
        </div>
      </div>
      <div className={`${styles.panelContent} ${isExpanded ? styles.panelContentExpanded : ''}`}>
        {children}
      </div>
    </div>
  );
};

export default Panel;
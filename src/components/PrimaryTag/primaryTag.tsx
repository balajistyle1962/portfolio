import React from "react";
import "./primaryTag.css";


interface TagProps {
  label: string[];
}

const PrimaryTag: React.FC<TagProps> = ({ label }) => {
  return (
    <div className="tag-container">
      {label.map((lab, index) => (
        <div key={index} className="tag">
          {lab}
        </div>
      ))}
    </div>
  );
};

export default PrimaryTag;
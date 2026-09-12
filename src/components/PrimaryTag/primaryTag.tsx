import React from "react";
import "./primaryTag.css";

export interface TagItem {
  label: string;
  icon?: React.ElementType;
}

type TagValue = string | TagItem;

interface TagProps {
  label: TagValue[];
}

const PrimaryTag: React.FC<TagProps> = ({ label }) => {
  return (
    <div className="tag-container">
      {label.map((item, index) => {
        const text = typeof item === "string" ? item : item.label;
        const Icon = typeof item === "string" ? undefined : item.icon;

        return (
          <div key={`${text}-${index}`} className="tag">
            {Icon && (
              <span className="tag-icon">
                <Icon size={12} />
              </span>
            )}
            {text}
          </div>
        );
      })}
    </div>
  );
};

export default PrimaryTag;

import React from "react";
import { ArrowUpRight, User } from "lucide-react";
import "./infoCard.css";

interface InfoCardProps {
  value: string;
  title: string;
  icon?: React.ElementType;
}

const InfoCard: React.FC<InfoCardProps> = ({
  value,
  title,
  icon: Icon = User
}) => {
  return (
    <div className="info-card">
      <div className="card-header">

        <div className="icon-box">
          <div className="icon">
            <Icon size={18} />
          </div>
        </div>

          <div className="card-arrow">
            <ArrowUpRight size={16} />
          </div>

      </div>

     

      {/* Value */}
      <h1 className="card-title">{value}</h1>

      {/* Title */}
      <p className="card-desc">{title}</p>
      </div>
      

  
  );
};

export default InfoCard;
import './primaryButton.css'
// If using react-icons, import as needed:
import type { IconType } from "react-icons";

interface PrimaryBtnProps {
    label: string;
    onClick?: () => void;
    icons?: boolean;
    iconName?: IconType; // expects a React component from react-icons
}

const PrimaryBtn = (props: PrimaryBtnProps) => {
    const { label, onClick, icons, iconName: Icon } = props;

    return (
        <div onClick={onClick} className="primary-button">
            <span>{label}</span>
            {icons && Icon && (
                <span className="primary-button_icon">
                    <Icon width={15} height={13} viewBox='0 0 20 18'/>
                </span>
            )}
        </div>
    );
}

export default PrimaryBtn;
import './primaryButton.css';
import type { ElementType } from 'react';

type PrimaryButtonVariant = 'primary' | 'secondary';
type PrimaryButtonIconPosition = 'left' | 'right';

interface PrimaryBtnProps {
    label: string;
    onClick?: () => void;
    icons?: boolean;
    iconName?: ElementType; // expects a component from lucide-react
    variant?: PrimaryButtonVariant;
    iconPosition?: PrimaryButtonIconPosition;
}

const PrimaryBtn = (props: PrimaryBtnProps) => {
    const {
        label,
        onClick,
        icons,
        iconName: Icon,
        variant = 'primary',
        iconPosition = 'right',
    } = props;

    const hasIcon = Boolean(icons && Icon);

    return (
        <div
            onClick={onClick}
            className={`primary-button primary-button--${variant}`}
        >
            {hasIcon && Icon && iconPosition === 'left' && (
                <span className="primary-button_icon">
                    <Icon size={16} />
                </span>
            )}

            <span>{label}</span>

            {hasIcon && Icon && iconPosition === 'right' && (
                <span className="primary-button_icon">
                    <Icon size={16} />
                </span>
            )}
        </div>
    );
}

export default PrimaryBtn;

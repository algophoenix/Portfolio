import React, { type ButtonHTMLAttributes } from 'react';
import './Button.css';
import { Loader2 } from 'lucide-react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'tertiary' | 'icon';
    size?: 'sm' | 'md' | 'lg';
    isLoading?: boolean;
    leftIcon?: React.ReactNode;
    rightIcon?: React.ReactNode;
    href?: string;
    target?: string;
}

export const Button: React.FC<ButtonProps> = ({
    children,
    variant = 'primary',
    size = 'md',
    isLoading = false,
    leftIcon,
    rightIcon,
    className = '',
    href,
    disabled,
    ...props
}) => {
    const baseClass = `btn btn-${variant} btn-${size} ${className} ${isLoading ? 'btn-loading' : ''}`;

    const content = (
        <>
            {isLoading && <Loader2 className="btn-spinner" size={18} />}
            {!isLoading && leftIcon && <span className="btn-icon-left">{leftIcon}</span>}
            {children}
            {!isLoading && rightIcon && <span className="btn-icon-right">{rightIcon}</span>}
        </>
    );

    if (href) {
        return (
            <a
                href={href}
                className={baseClass}
                aria-disabled={disabled || isLoading}
                target={props.target}
                rel={props.target === '_blank' ? 'noopener noreferrer' : undefined}
                onClick={(e) => {
                    if (disabled || isLoading) e.preventDefault();
                    if (props.onClick) props.onClick(e as any);
                }}
            >
                {content}
            </a>
        );
    }

    return (
        <button
            className={baseClass}
            disabled={disabled || isLoading}
            {...props}
        >
            {content}
        </button>
    );
};

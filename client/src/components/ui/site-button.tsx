import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SiteButtonProps {
  children: ReactNode;
  onClick?: () => void;
  href?: string;
  type?: "button" | "submit" | "reset";
  className?: string;
  icon?: ReactNode;
  external?: boolean;
}

const SiteButton = ({ 
  children, 
  onClick, 
  href, 
  type = "button", 
  className = "",
  icon,
  external = false
}: SiteButtonProps) => {
  const buttonClasses = cn(
    "btn-magic text-light font-semibold py-3 px-6 rounded-md shadow-lg inline-flex items-center justify-center font-montserrat",
    className
  );
  
  if (href) {
    return (
      <a 
        href={href}
        onClick={onClick}
        className={buttonClasses}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
      >
        {icon && <span className="mr-3 w-5 h-5 flex items-center justify-center">{icon}</span>}
        {children}
      </a>
    );
  }
  
  return (
    <button 
      type={type} 
      onClick={onClick} 
      className={buttonClasses}
    >
      {icon && <span className="mr-3 w-5 h-5 flex items-center justify-center">{icon}</span>}
      {children}
    </button>
  );
};

export default SiteButton;

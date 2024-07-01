"use client"

interface MenuItemProps {
    onClick: () => void;
    label: string;
}

const MenuItem: React.FC<MenuItemProps> = ({
    onClick,
    label
}) => {
  return (
    <div
    onClick={onClick}    
    className="
        mx-4
        my-2
        cursor-pointer
        max-w-[65px]
        bg-clip-text hover:text-transparent bg-gradient-to-r from-cpurple via-cpink  to-cpinkx transition-colors duration-300 active:text-transparent
    ">
        {label}
    </div>
  )
}

export default MenuItem
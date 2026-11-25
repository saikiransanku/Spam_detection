export default function Button({
  children,
  variant = "primary",
  size = "md",
  type = "button",
  className = "",
  disabled = false,
  onClick,
  ...props
}) {
  const baseStyles =
    "inline-flex items-center justify-center gap-2 rounded-lg font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0D0D0D] focus-visible:ring-offset-2 focus-visible:ring-offset-[#FFFDD0] disabled:cursor-not-allowed disabled:opacity-50";

  const variants = {
    primary:
      "bg-[#0D0D0D] text-[#FFFDD0] border border-[#0D0D0D] hover:bg-[#242420]",
    secondary:
      "bg-[#FFFEE8] text-[#0D0D0D] border border-[#1A1A18] hover:bg-[#F4F0BE]",
    ghost:
      "bg-transparent text-[#0D0D0D] border border-transparent hover:bg-[#F4F0BE]",
  };

  const sizes = {
    sm: "px-3 py-1.5 text-xs",
    md: "px-4 py-2.5 text-sm",
    lg: "px-5 py-3 text-sm",
  };

  const variantClass = variants[variant] || variants.primary;
  const sizeClass = sizes[size] || sizes.md;

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={`${baseStyles} ${variantClass} ${sizeClass} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}


export const Button = ({ 
  children, 
  className = "", 
  ...props 
}: React.ButtonHTMLAttributes<HTMLButtonElement>) => (
  <button 
    className={`text-sz-24 tracking-wide border rounded-4xl px-[clamp(1rem,2.22vw,3rem)] py-[clamp(0.25rem,0.56vw,1rem)] cursor-pointer ${className}`}
    {...props}
  >
    {children}
  </button>
);

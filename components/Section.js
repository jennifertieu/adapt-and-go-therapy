export default function Section({ id, children, className = "" }) {
  const baseClasses = "py-16 px-8 md:py-24 md:px-12 lg:px-16 lg:py-32";
  const combinedClasses = className
    ? `${baseClasses} ${className}`
    : baseClasses;

  return (
    <section id={id} className={combinedClasses}>
      {children}
    </section>
  );
}


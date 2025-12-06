import Image from "next/image";

/**
 * StaffMember Component
 * 
 * Displays a staff member card with their photo, name, and title.
 * Supports both image-based and placeholder (initials) display modes.
 * 
 * @param {Object} props
 * @param {string} props.name - Staff member's full name
 * @param {string} props.title - Staff member's title/role (e.g., "CEO, OTR/L", "PTA")
 * @param {string} [props.imageSrc] - Optional path to staff member's photo
 * @param {string} [props.initials] - Optional initials for placeholder display (used when imageSrc is not provided)
 * @param {string} [props.imageSize] - Size of the circular image (default: "w-56 h-56")
 */
export default function StaffMember({
  name,
  title,
  imageSrc,
  initials,
  imageSize = "w-56 h-56",
}) {
  return (
    <div className="text-center grid">
      <div
        className={`relative ${imageSize} m-auto mb-4 rounded-full overflow-hidden ${
          !imageSrc ? "bg-secondary flex items-center justify-center" : ""
        }`}
      >
        {imageSrc ? (
          <Image
            src={imageSrc}
            alt={name}
            fill
            className="object-cover"
          />
        ) : (
          <span className="text-4xl text-body">{initials || "?"}</span>
        )}
      </div>
      <h3 className="text-xl font-semibold text-body">{name}</h3>
      <p className="text-body">{title}</p>
    </div>
  );
}



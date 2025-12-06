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
    <article className="text-center grid" role="listitem">
      <div
        className={`relative ${imageSize} m-auto mb-4 rounded-full overflow-hidden ${
          !imageSrc ? "bg-secondary flex items-center justify-center" : ""
        }`}
      >
        {imageSrc ? (
          <Image
            src={imageSrc}
            alt={`${name}, ${title} at Adapt and Go Therapy`}
            fill
            className="object-cover"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        ) : (
          <span className="text-4xl text-body" aria-label={`${name} profile picture placeholder`}>{initials || "?"}</span>
        )}
      </div>
      <h3 className="text-xl font-semibold text-body">{name}</h3>
      <p className="text-body">{title}</p>
    </article>
  );
}



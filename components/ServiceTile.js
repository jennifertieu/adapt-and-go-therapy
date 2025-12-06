/**
 * ServiceTile Component
 *
 * Displays a service card with an icon, title, and description.
 *
 * @param {Object} props
 * @param {React.Component} props.icon - React icon component to display
 * @param {string} props.title - Service title
 * @param {string} props.description - Service description text
 */
export default function ServiceTile({ icon: Icon, title, description }) {
  return (
    <article className="text-center py-12 px-6 bg-secondary rounded-lg" role="listitem">
      <div className="flex justify-center mb-4" aria-hidden="true">
        <Icon className="text-4xl text-accent" />
      </div>
      <h3 className="text-2xl font-semibold text-body mb-4">{title}</h3>
      <p className="text-body leading-relaxed">{description}</p>
    </article>
  );
}


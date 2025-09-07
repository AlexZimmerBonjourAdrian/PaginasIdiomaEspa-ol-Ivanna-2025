interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
  iconBg: string;
}

export default function FeatureCard({ icon, title, description, iconBg }: FeatureCardProps) {
  return (
    <div className="flex gap-4 fade-in" data-testid={`feature-card-${title.toLowerCase().replace(/\s+/g, '-')}`}>
      <div className={`flex-shrink-0 w-12 h-12 ${iconBg} rounded-lg flex items-center justify-center`}>
        <i className={`${icon} text-xl`}></i>
      </div>
      <div>
        <h3 className="literary-title text-xl font-semibold text-foreground mb-2" data-testid={`feature-title-${title.toLowerCase().replace(/\s+/g, '-')}`}>
          {title}
        </h3>
        <p className="literary-subtitle text-muted-foreground" data-testid={`feature-description-${title.toLowerCase().replace(/\s+/g, '-')}`}>
          {description}
        </p>
      </div>
    </div>
  );
}

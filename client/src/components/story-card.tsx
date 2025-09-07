import { Badge } from "@/components/ui/badge";

interface StoryCardProps {
  title: string;
  content: string;
  description: string;
  badge: {
    icon: string;
    text: string;
    variant: "primary" | "secondary" | "accent";
  };
  stat: {
    icon: string;
    text: string;
  };
}

export default function StoryCard({ title, content, description, badge, stat }: StoryCardProps) {
  const getBadgeClasses = (variant: string) => {
    switch (variant) {
      case "primary":
        return "bg-primary/20 text-primary";
      case "secondary":
        return "bg-secondary/20 text-secondary";
      case "accent":
        return "bg-accent/20 text-accent";
      default:
        return "bg-primary/20 text-primary";
    }
  };

  return (
    <div className="story-card bg-card rounded-xl p-8 border border-border fade-in" data-testid={`story-card-${title.toLowerCase().replace(/\s+/g, '-')}`}>
      <div className="mb-4">
        <span className={`px-3 py-1 rounded-full text-sm font-medium ${getBadgeClasses(badge.variant)}`}>
          <i className={`${badge.icon} mr-1`}></i>
          {badge.text}
        </span>
      </div>
      <h3 className="literary-title text-2xl font-bold text-primary mb-4" data-testid={`story-title-${title.toLowerCase().replace(/\s+/g, '-')}`}>
        {title}
      </h3>
      <div className="literary-text text-card-foreground mb-6">
        <p className="italic mb-4" data-testid={`story-content-${title.toLowerCase().replace(/\s+/g, '-')}`}>
          {content}
        </p>
        <p className="text-sm text-muted-foreground" data-testid={`story-description-${title.toLowerCase().replace(/\s+/g, '-')}`}>
          {description}
        </p>
      </div>
      <div className="flex items-center text-sm text-muted-foreground" data-testid={`story-stat-${title.toLowerCase().replace(/\s+/g, '-')}`}>
        <i className={`${stat.icon} mr-2`}></i>
        {stat.text}
      </div>
    </div>
  );
}

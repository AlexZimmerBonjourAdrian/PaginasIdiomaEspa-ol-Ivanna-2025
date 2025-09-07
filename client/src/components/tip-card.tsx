interface TipCardProps {
  number: number;
  title: string;
  description: string;
  color: string;
}

export default function TipCard({ number, title, description, color }: TipCardProps) {
  return (
    <div className="bg-card rounded-lg p-6 border border-border text-center fade-in" data-testid={`tip-card-${number}`}>
      <div className={`w-12 h-12 ${color} rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4`}>
        {number}
      </div>
      <h4 className="literary-title text-lg font-semibold text-foreground mb-2" data-testid={`tip-title-${number}`}>
        {title}
      </h4>
      <p className="literary-subtitle text-sm text-muted-foreground" data-testid={`tip-description-${number}`}>
        {description}
      </p>
    </div>
  );
}

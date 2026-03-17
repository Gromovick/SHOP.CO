import { cn } from '../../lib';
import Star from '../../assets/icons/star.svg?react';
type Props = { className?: string; rating: number; showNums?: boolean };

const Rating = ({ className, rating, showNums = false }: Props) => {
  function getStage(starIndex: number): string {
    const fill = Math.max(0, Math.min(1, rating - starIndex));
    const pct = Math.round(fill * 10) * 10;
    return `url(#star_stage_${pct})`;
  }

  return (
    <div className="flex gap-[10px] items-center mb-1 lg:mb-2">
      <div className={cn('flex gap-1', className)}>
        {[0, 1, 2, 3, 4].map((star) => {
          return (
            <Star
              className={'size-full'}
              key={`rating-${star}`}
              fill={getStage(star)}
            />
          );
        })}
      </div>
      {showNums && (
        <span className="font-satoshi text-[12px] text-black lg:text-[16px]">
          {rating}
          {'/'}
          <span className="text-black/50">5</span>
        </span>
      )}
    </div>
  );
};

export default Rating;

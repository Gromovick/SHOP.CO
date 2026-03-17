const stages = [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

const StarGradientDefs = () => {
  return (
    <svg width="0" height="0" className="absolute">
      <defs>
        {stages.map((stage) => {
          return (
            <linearGradient
              key={`star_stage_${stage}`}
              id={`star_stage_${stage}`}
              x1="0%"
              y1="0%"
              x2="100%"
              y2="0%"
            >
              <stop offset={`${stage}%`} stopColor="#FFD700" />
              <stop offset={`${stage}%`} stopColor="#BDBDBD" />
              <stop offset="100%" stopColor="#BDBDBD" />
            </linearGradient>
          );
        })}
      </defs>
    </svg>
  );
};

export default StarGradientDefs;

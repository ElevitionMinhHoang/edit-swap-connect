import { useCountUp } from "@/hooks/useCountUp";

interface StatCounterProps {
  end: number;
  suffix?: string;
  label: string;
  decimals?: number;
}

const StatCounter = ({ end, suffix = "", label, decimals = 0 }: StatCounterProps) => {
  const { ref, value, displayValue } = useCountUp({
    end,
    suffix,
    decimals,
    duration: 2000,
  });

  return (
    <div
      ref={ref}
      className="group flex flex-col items-center justify-center p-8 rounded-3xl bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-lg border border-white/20 hover:scale-105 hover:brightness-110 transition-all duration-500 hover:shadow-glow"
    >
      <div className="text-6xl md:text-7xl font-extrabold mb-2">
        <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-500 bg-clip-text text-transparent animate-gradient">
          {displayValue < 1 && decimals > 0 ? "0" : Math.floor(displayValue).toLocaleString()}
        </span>
        {suffix === "%" && (
          <span className="text-orange-400 ml-1">{suffix}</span>
        )}
        {suffix === "+" && (
          <span className="text-yellow-400 ml-1">{suffix}</span>
        )}
      </div>
      <p className="text-gray-200 text-lg font-medium text-center mt-2 group-hover:text-white transition-colors">
        {label}
      </p>
    </div>
  );
};

export default StatCounter;

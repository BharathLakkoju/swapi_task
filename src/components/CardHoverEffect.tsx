import { cn } from "../utils/cn";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

export const HoverEffect = ({
  items,
  className,
}: {
  items: {
    name: string;
    rotation_period: string;
    orbital_period: string;
    diameter: string;
    climate: string;
    gravity: string;
    terrain: string;
    surface_water: string;
    residents: string[];
    films: string[];
    created: string;
    edited: string;
    url: string;
  }[];
  className?: string;
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 py-10 px-[5%] z-10 bg-transparent",
        className
      )}
    >
      {items.map((item, idx) => (
        <div
          key={item?.url}
          className="relative block w-full h-full p-2 group"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 h-full w-full bg-neutral-200 dark:bg-slate-800/[0.8] block  rounded-3xl"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.15 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 },
                }}
              />
            )}
          </AnimatePresence>
          <Card>
            <CardTitle>
              <div className="flex flex-col">
                <span className="text-xs font-medium">Planet Name: </span>
                <span className="text-2xl font-extrabold text-blue-400">
                  {item.name}
                </span>
              </div>
            </CardTitle>
            <CardDescription>
              <div>
                <div className="flex flex-col">
                  <span className="text-xs font-medium">Rotation Period: </span>
                  <span className="text-xl font-semibold text-blue-400">
                    {item.rotation_period}
                  </span>
                </div>
                <div className="flex flex-col">
                  <span className="text-xs font-medium">Orbital Period: </span>
                  <span className="text-xl font-semibold text-blue-400">
                    {item.orbital_period}
                  </span>
                </div>
                <div className="flex flex-col">
                  <span className="text-xs font-medium">Diameter: </span>
                  <span className="text-xl font-semibold text-blue-400">
                    {item.diameter}
                  </span>
                </div>
                <div className="flex flex-col">
                  <span className="text-xs font-medium">Climate: </span>
                  <span className="text-xl font-semibold text-blue-400">
                    {item.climate}
                  </span>
                </div>
              </div>
            </CardDescription>
          </Card>
        </div>
      ))}
    </div>
  );
};

export const Card = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "rounded-2xl h-full w-full p-4 overflow-hidden bg-black border border-transparent dark:border-white/[0.2] group-hover:border-slate-700 relative z-20",
        className
      )}
    >
      <div className="relative z-50">
        <div className="p-4">{children}</div>
      </div>
    </div>
  );
};
export const CardTitle = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <h4 className={cn("text-zinc-100 font-bold tracking-wide mt-4", className)}>
      {children}
    </h4>
  );
};
export const CardDescription = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <p
      className={cn(
        "mt-8 text-zinc-400 tracking-wide leading-relaxed text-sm",
        className
      )}
    >
      {children}
    </p>
  );
};

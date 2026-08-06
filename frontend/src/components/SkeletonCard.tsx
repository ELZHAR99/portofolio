interface SkeletonCardProps {
  variant?: "project" | "skill" | "certificate" | "testimonial";
}

export default function SkeletonCard({ variant = "project" }: SkeletonCardProps) {
  if (variant === "skill") {
    return (
      <div className="p-6 bg-gray-900/50 rounded-2xl border border-gray-800 animate-pulse space-y-4">
        <div className="h-6 bg-gray-800 rounded-md w-1/3" />
        <div className="space-y-3">
          <div className="h-4 bg-gray-800 rounded-md w-full" />
          <div className="h-4 bg-gray-800 rounded-md w-5/6" />
        </div>
      </div>
    );
  }

  if (variant === "certificate") {
    return (
      <div className="p-6 bg-gray-900/50 rounded-2xl border border-gray-800 animate-pulse space-y-4">
        <div className="h-6 bg-gray-800 rounded-md w-2/3" />
        <div className="h-4 bg-gray-800 rounded-md w-1/2" />
        <div className="h-4 bg-gray-800 rounded-md w-1/3" />
      </div>
    );
  }

  if (variant === "testimonial") {
    return (
      <div className="p-6 bg-gray-900/50 rounded-2xl border border-gray-800 animate-pulse space-y-4">
        <div className="flex gap-1">
          {[1, 2, 3, 4, 5].map((i) => (
            <div key={i} className="w-4 h-4 bg-gray-800 rounded-full" />
          ))}
        </div>
        <div className="space-y-2">
          <div className="h-4 bg-gray-800 rounded-md w-full" />
          <div className="h-4 bg-gray-800 rounded-md w-3/4" />
        </div>
        <div className="flex items-center gap-4 pt-4 border-t border-gray-800">
          <div className="w-10 h-10 bg-gray-800 rounded-full" />
          <div className="space-y-2 w-1/2">
            <div className="h-4 bg-gray-800 rounded-md w-full" />
            <div className="h-3 bg-gray-800 rounded-md w-2/3" />
          </div>
        </div>
      </div>
    );
  }

  // Default: Project Variant
  return (
    <div className="flex flex-col h-full rounded-2xl bg-gray-900/50 border border-gray-800 overflow-hidden animate-pulse">
      <div className="aspect-video bg-gray-800 border-b border-gray-800" />
      <div className="p-6 flex flex-col flex-1 space-y-4">
        <div className="h-4 bg-gray-800 rounded-md w-1/4" />
        <div className="h-6 bg-gray-800 rounded-md w-3/4" />
        <div className="space-y-2">
          <div className="h-4 bg-gray-800 rounded-md w-full" />
          <div className="h-4 bg-gray-800 rounded-md w-5/6" />
        </div>
        <div className="flex gap-2 pt-2">
          {[1, 2, 3].map((i) => (
            <div key={i} className="h-6 w-16 bg-gray-800 rounded-md" />
          ))}
        </div>
        
        <div className="flex gap-4 pt-4 border-t border-gray-800 mt-auto">
          <div className="h-4 bg-gray-800 rounded-md w-16" />
          <div className="h-4 bg-gray-800 rounded-md w-16" />
        </div>
      </div>
    </div>
  );
}
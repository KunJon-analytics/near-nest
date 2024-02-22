import Link from "next/link";

import { Button } from "@/components/ui/button";
import Heading from "@/components/shared/heading";

interface EmptyStateProps {
  title?: string;
  subtitle?: string;
  showReset?: boolean;
}

const EmptyState: React.FC<EmptyStateProps> = ({
  title = "No exact matches",
  subtitle = "Try changing or removing some of your filters.",
  showReset,
}) => {
  return (
    <div
      className="
        h-[60vh]
        flex 
        flex-col 
        gap-2 
        justify-center 
        items-center 
      "
    >
      <Heading center title={title} subtitle={subtitle} />
      <div className="w-48 mt-4">
        {showReset && (
          <Button asChild variant={"outline"}>
            <Link href="/">Remove all filters</Link>
          </Button>
        )}
      </div>
    </div>
  );
};

export default EmptyState;

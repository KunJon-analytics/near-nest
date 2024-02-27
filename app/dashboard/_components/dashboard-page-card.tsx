import Image from "next/image";

import { Button } from "@/components/ui/button";
import Link from "next/link";

interface DashboardPageCardProps {
  image: string;
  title: string;
  description: string;
  buttonText: string;
  link: string;
}

const DashboardPageCard = ({
  image,
  buttonText,
  description,
  title,
  link,
}: DashboardPageCardProps) => {
  return (
    <div className="card">
      <div className="flex justify-center p-5">
        <Image
          className="w-9/12"
          width="500"
          height="500"
          src={image}
          alt="image"
        />
      </div>
      <div className="px-4 pb-8 text-center sm:px-5">
        <h4 className="text-lg font-semibold text-slate-700 dark:text-navy-100">
          {title}
        </h4>
        <p className="pt-3">{description}</p>

        <Button
          asChild
          className="btn mt-8 bg-primary font-medium text-white shadow-lg shadow-primary/50 hover:bg-primary-focus focus:bg-primary-focus active:bg-primary-focus/90 dark:bg-accent dark:shadow-accent/50 dark:hover:bg-accent-focus dark:focus:bg-accent-focus dark:active:bg-accent/90"
        >
          <Link href={link}>{buttonText}</Link>
        </Button>
      </div>
    </div>
  );
};

export default DashboardPageCard;

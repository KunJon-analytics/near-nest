import React from "react";

import prisma from "@/lib/prisma";
import { getSession } from "@/actions/session";
import Link from "next/link";
import { formatDistanceToNow } from "date-fns";
import Image from "next/image";

const MoreProperties = async () => {
  const session = await getSession();
  const properties = await prisma.property.findMany({
    where: { hostId: session.uuid },
    include: { media: true },
  });
  return (
    <div className="mt-3 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-1">
      {properties.map((property) => (
        <div className="flex justify-between space-x-2" key={property.id}>
          <div className="flex flex-1 flex-col justify-between">
            <div>
              <p className="text-xs font-medium line-clamp-1">
                {formatDistanceToNow(property.createdAt, { addSuffix: true })}
              </p>
              <div className="mt-1 text-slate-800 line-clamp-3 dark:text-navy-100">
                <Link
                  href={`/dashboard/host/properties/${property.id}`}
                  className="font-medium text-slate-700 hover:text-primary focus:text-primary dark:text-navy-100 dark:hover:text-accent-light dark:focus:text-accent-light"
                >
                  {property.title}
                </Link>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <p className="text-xs font-medium line-clamp-1">
                {property.status}
              </p>
            </div>
          </div>
          <Image
            src={property.media[0].url || "/images/800x600.png"}
            className="h-24 w-24 rounded-lg object-cover object-center"
            alt="image"
            width={800}
            height={600}
          />
        </div>
      ))}
    </div>
  );
};

export default MoreProperties;

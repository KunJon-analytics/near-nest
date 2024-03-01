import React from "react";

import { getSession } from "@/actions/session";

import DashboardPageCard from "./_components/dashboard-page-card";

const DashboardPage = async () => {
  const session = await getSession();

  return (
    <main className="main-content w-full place-items-center px-[var(--margin-x)] pb-12">
      <div className="py-5 text-center lg:py-6">
        <p className="text-sm uppercase">Ready to Rent?</p>
        <h3 className="mt-1 text-xl font-semibold text-slate-600 dark:text-navy-100">
          Discover, list, and manage properties with ease. Are you in?
        </h3>
      </div>
      <div className="grid max-w-4xl grid-cols-1 gap-4 sm:grid-cols-3 sm:gap-5 lg:gap-6">
        <DashboardPageCard
          buttonText="Start Exploring"
          description="Find your ideal rental nearby and start your next adventure today!"
          image="/images/illustrations/creativedesign.svg"
          title="Find Your Home"
          link="/dashboard/user"
        />
        {session.isHost && (
          <DashboardPageCard
            buttonText="Manage Properties"
            description="List, manage, and earn from your properties hassle-free with our platform"
            image="/images/illustrations/responsive.svg"
            title="Manage Properties"
            link="/dashboard/host"
          />
        )}

        {!session.isHost && (
          <DashboardPageCard
            buttonText="Get Started Hosting"
            description="Ready to become a host? Start earning by listing your property with us!"
            image="/images/illustrations/performance.svg"
            title="Start Hosting"
            link="/dashboard/be-a-host"
          />
        )}
      </div>
    </main>
  );
};

export default DashboardPage;

import Image from "next/image";
import React, { Suspense } from "react";

import SignInForm from "../sign-in-form";

const Signin = () => {
  return (
    <main className="main-content w-full place-items-center px-[var(--margin-x)] pb-12">
      <div className="py-5 text-center lg:py-6">
        <p className="text-sm uppercase">Welcome Back to Near Nest!</p>
        <h3 className="mt-1 text-xl font-semibold text-slate-600 dark:text-navy-100">
          Securely Authenticate with Your Pi Wallet to Access Your Account
        </h3>
      </div>
      <div className="card">
        <div className="flex justify-center p-5">
          <Image
            className="w-9/12"
            src="/images/illustrations/responsive.svg"
            alt="image"
            width="500"
            height="500"
          />
        </div>
        <div className="px-4 pb-8 text-center sm:px-5">
          <h4 className="text-lg font-semibold text-slate-700 dark:text-navy-100">
            Pi Wallet Authentication
          </h4>
          <p className="pt-3">
            Securely access your Koyiana account using your Pi Wallet
            credentials.
          </p>
          <Suspense>
            <SignInForm />
          </Suspense>
        </div>
      </div>
    </main>
  );
};

export default Signin;

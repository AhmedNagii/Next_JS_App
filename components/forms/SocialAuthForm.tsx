"use client";

import { Button } from "../ui/button";
import Image from "next/image";
import { toast } from "sonner";
import { signIn } from "next-auth/react";
import ROUTES from "@/constants/routes";

const SocialAuthForm = () => {
  const buttonClass =
    "background-dark400_light900 body-medium text-dark200_light800 rounded-2 min-h-12 flex-1 px-4 py-3.5 cursor-pointer";
  const handleSgnIn = async (provider: "github" | "google") => {
    try {

        await signIn(provider, {
            callbackUrl: ROUTES.HOME,
            redirect: true
        });

    } catch (error) {
      toast("Sign-in Failed", {
        position: "top-center",
        description: error instanceof Error ? error.message : "There was an error logging in with " + provider,
      });
    }
  };

  return (
    <div className="fl;ex-wrap mt-10 flex gap-2.5">
      <Button className={buttonClass} onClick={() => handleSgnIn("github")}>
        <Image
          src="/icons/github.svg"
          alt="Github Logo"
          width={20}
          height={20}
          className="invert-colors mr-2.5 object-contain"
        />
        <span>Log in with GitHub</span>
      </Button>
      <Button className={buttonClass} onClick={() => handleSgnIn("google")}>
        <Image src="/icons/google.svg" alt="Google Logo" width={20} height={20} className="mr-2.5 object-contain" />
        <span>Log in with Google</span>
      </Button>
    </div>
  );
};

export default SocialAuthForm;

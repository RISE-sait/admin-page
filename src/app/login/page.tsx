"use client"

import Image from "next/image";
import RiseLogo from "@/public/RiseLogo.svg"
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Login() {

  // Session & Router
  const { data: session, status } = useSession();
  const router = useRouter();

  // Push to home if already authenticated
  useEffect(() => {
    if (status === "authenticated") {
      router.push("/");
    }
  }, [status, router]);

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex flex-col justify-center items-center text-black h-full">
      <Image src={RiseLogo} alt="RiseLogo" />
      <button
        onClick={() => signIn("google", { callbackUrl: "/" })}
        className="p-2 w-52 bg-[#1D1D1D] text-white rounded-md hover:bg-blue-700 drop-shadow-md"
      >
        Google SSO Login

      </button>
    </div>
  );
}

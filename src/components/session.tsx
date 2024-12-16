"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Session() {

    // Session
    const { data: session, status } = useSession();
    const router = useRouter();

    // Push to login if unauthenticated
    useEffect(() => {
    if (status === "unauthenticated") {
        // router.push("/login");
    }
    }, [status, router]);

    if (status === "loading") {
    return <div className="h-screen w-screen flex justify-center items-center" >Loading...</div>;
    }

  return(
    <div></div>
  )

}

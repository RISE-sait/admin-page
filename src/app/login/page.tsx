import Image from "next/image";
import RiseLogo from "@/public/RiseLogo.svg"
import GoogleLoginButton from "src/components/GoogleLoginButton";
import envs from "src/envs";
import { GoogleOAuthProvider } from "@react-oauth/google";

export default function Login() {

  return (
    <div className="flex flex-col justify-center items-center text-black h-full">
      <Image src={RiseLogo} alt="RiseLogo" />
      <GoogleOAuthProvider clientId={envs.GOOGLE_AUTH_CLIENTID}>
        <GoogleLoginButton />
      </GoogleOAuthProvider>
      {/* onClick={() => signIn("google", { callbackUrl: "/" })}
        className="p-2 w-52 bg-[#1D1D1D] text-white rounded-md hover:bg-blue-700 drop-shadow-md"
      >
        Google SSO Login */}

    </div>
  );
}

"use client"

import { useGoogleLogin } from '@react-oauth/google';

const GoogleLoginButton = () => {
    
    const login = useGoogleLogin({
        flow: 'auth-code',
        onSuccess: async(codeResponse) => {
            const response = await fetch('http://localhost:8080/api/auth/google/callback', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ code: codeResponse.code })
            });
            const {token} = await response.json();

            sessionStorage.setItem('jwt', token);
        }
    })
               

    return <button onClick={() => login()}>Login with Google</button>
};

export default GoogleLoginButton;
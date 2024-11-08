"use client";

import { FcGoogle } from 'react-icons/fc';
import { FaGithub } from 'react-icons/fa';

import { Button } from "@/components/ui/button";
import { CardContent } from "@/components/ui/card";

export const SocialLogin = () => {
    return (
        <CardContent className="p-7 flex flex-col gap-y-4">
            <Button
                disabled={false}
                variant="secondary"
                size="lg"
                className="w-full"
            >
                <FcGoogle className='mr-2 size-5' />
                Login with Google
            </Button>
            <Button
                disabled={false}
                variant="secondary"
                size="lg"
                className="w-full"
            >
                <FaGithub className='mr-2 size-5' />
                Login with Github
            </Button>
        </CardContent>
    )
}
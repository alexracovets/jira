"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from 'react-hook-form';
import Link from "next/link";
import { z } from 'zod';

import { CustomFormField } from "@/features/auth/components/shared/customFormField";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { SocialLogin } from "@/features/auth/components/shared/socialLogin";
import { DottedSeparator } from "@/components/dotted-separator";
import { Button } from "@/components/ui/button";
import { Form } from '@/components/ui/form';

import { useLogin } from "@/features/auth/api/use-login";
import { loginSchema } from "@/features/auth/schemas";

export const SignInCard = () => {
    const { mutate } = useLogin();

    const form = useForm<z.infer<typeof loginSchema>>({
        resolver: zodResolver(loginSchema),
        defaultValues: {
            email: "",
            password: ""
        }
    });

    const onSubmit = (values: z.infer<typeof loginSchema>) => {
        mutate({ json: values });
    };

    return (
        <Card className="w-full h-full md:w-[487px] border-none shadow-none">
            <CardHeader className="flex items-center justify-center text-center p-7">
                <CardTitle className="text-2xl">
                    Welcome back!
                </CardTitle>
            </CardHeader>
            <div className="px-7">
                <DottedSeparator />
            </div>
            <CardContent className="p-7">
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                        <CustomFormField
                            name="email"
                            control={form.control}
                            type="email"
                            placeholder="Enter email address"
                        />
                        <CustomFormField
                            name="password"
                            control={form.control}
                            type="password"
                            placeholder="Enter your password"
                        />
                        <Button disabled={false} size="lg" className="w-full">Login</Button>
                    </form>
                </Form>
            </CardContent>
            <div className="px-7">
                <DottedSeparator />
            </div>
            <SocialLogin />
            <div className="px-7">
                <DottedSeparator />
            </div>
            <CardContent className="p-7 flex justify-center items-center">
                <p>
                    Don&apos;t have an account?
                    <Link href="/sign-out">
                        <span className="text-blue-700">&nbsp;Sign Up</span>
                    </Link>
                </p>
            </CardContent>
        </Card>
    )
}
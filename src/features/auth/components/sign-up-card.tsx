"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from 'react-hook-form';
import Link from 'next/link';
import { z } from 'zod';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CustomFormField } from "@/features/auth/components/shared/customFormField";
import { SocialLogin } from "@/features/auth/components/shared/socialLogin";
import { DottedSeparator } from "@/components/dotted-separator";
import { Button } from "@/components/ui/button";
import { Form } from '@/components/ui/form';

const formSchema = z.object({
    name: z.string().min(1, "Required"),
    email: z.string().email(),
    password: z.string().min(8, "Minimum of 8 characters required"),
})

export const SignUpCard = () => {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            email: "",
            password: ""
        }
    })

    const onSubmit = (values: z.infer<typeof formSchema>) => {
        console.log(values)
    }

    return (
        <Card className="w-full h-full md:w-[487px] border-none shadow-none">
            <CardHeader className="flex items-center justify-center text-center p-7">
                <CardTitle className="text-2xl">
                    Sign Up
                </CardTitle>
                <CardDescription>
                    By signin up, you agree to out {" "}
                    <Link href={"/ptivacy"}>
                        <span className='text-blue-700'>Privacy Policy</span>
                    </Link>
                    {" "}and{" "}
                    <Link href={"/terms"}>
                        <span className='text-blue-700'>Terms of Service</span>
                    </Link>
                </CardDescription>
            </CardHeader>
            <div className="px-7 pb-2">
                <DottedSeparator />
            </div>
            <CardContent className="p-7">
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                        <CustomFormField
                            name="name"
                            control={form.control}
                            type="text"
                            placeholder="Enter your name"
                        />
                        <CustomFormField
                            name="email"
                            control={form.control}
                            type="email"
                            placeholder="Enter email addres"
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
                    Already have an account?
                    <Link href="/sign-in">
                        <span className="text-blue-700">&nbsp;Sign In</span>
                    </Link>
                </p>
            </CardContent>
        </Card>
    )
}
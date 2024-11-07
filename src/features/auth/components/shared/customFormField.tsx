"use client";

import { FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form';
import { Input } from "@/components/ui/input";
import { FieldValues } from "react-hook-form";

import { CustomFormFieldProps } from '@/types/custom-form-field';

export const CustomFormField = <T extends FieldValues>({
    name,
    control,
    type,
    placeholder,
}: CustomFormFieldProps<T>) => {

    return (
        <FormField
            name={name}
            control={control}
            render={({ field }) => (
                <FormItem>
                    <FormControl>
                        <Input
                            {...field}
                            type={type}
                            placeholder={placeholder}
                        />
                    </FormControl>
                    <FormMessage />
                </FormItem>
            )}
        />
    )
}
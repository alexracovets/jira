"use client";

import { FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form';
import { Input } from "@/components/ui/input";
import { Control, FieldValues, Path } from "react-hook-form";

interface CustomFormFieldProps<T extends FieldValues> {
    name: Path<T>;
    control: Control<T>;
    type: string;
    placeholder: string;
}

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
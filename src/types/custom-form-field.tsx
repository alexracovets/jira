import { Control, FieldValues, Path } from "react-hook-form";

export interface CustomFormFieldProps<T extends FieldValues> {
    name: Path<T>;
    control: Control<T>;
    type: string;
    placeholder: string;
}

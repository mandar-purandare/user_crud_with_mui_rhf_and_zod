import React from "react";
import { Controller, FieldValues, Path, useFormContext } from "react-hook-form";
import { Option } from "../types/options";
import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Checkbox,
  FormGroup,
} from "@mui/material";

type Props<T extends FieldValues> = {
  name: Path<T>;
  options?: Option[];
  label: string;
};

function RHFCheckbox<T extends FieldValues>({
  name,
  options,
  label,
}: Props<T>) {
  const { control } = useFormContext();

  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { value, onChange }, fieldState: { error } }) => (
        <FormControl error={!!error}>
          <FormLabel>{label}</FormLabel>
          <FormGroup>
            {options?.map((option) => (
              <FormControlLabel
                // value={option.id}
                control={
                  <Checkbox
                    key={option.id}
                    onChange={() => {
                      if (value.includes(option.id)) {
                        onChange(
                          (value as string[]).filter(
                            (item) => item !== option.id
                          )
                        );
                      }else{
                        onChange([...value, option.id])
                      }
                    }}
                    checked={value.includes(option.id)}
                  />
                }
                label={option.label}
                key={option.id}
              />
            ))}
          </FormGroup>
        </FormControl>
      )}
    ></Controller>
  );
}

export default RHFCheckbox;

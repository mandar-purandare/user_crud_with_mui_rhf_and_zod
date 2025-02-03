import { DateTimePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { Controller, FieldValues, Path, useFormContext } from "react-hook-form";
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFnsV3';

type Props<T extends FieldValues> = {
  name: Path<T>;
  label: string;
};

function RHFDateTimePicker<T extends FieldValues>({ name,label }: Props<T>) {
  const { control } = useFormContext();
  return (
    <Controller
      control={control}
      name={name}
      render={({ field }) => (
        <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DateTimePicker label={label} {...field}/>
        </LocalizationProvider>
      )}
    />
  );
}

export default RHFDateTimePicker;

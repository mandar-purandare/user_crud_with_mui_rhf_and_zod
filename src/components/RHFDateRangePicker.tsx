import { LocalizationProvider } from "@mui/x-date-pickers";
import { Controller, FieldValues, Path, useFormContext } from "react-hook-form";
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFnsV3';
import { DateRangePicker } from "@mui/x-date-pickers-pro";

type Props<T extends FieldValues> = {
  name: Path<T>;
};

function RHFDateRangePicker<T extends FieldValues>({ name }: Props<T>) {
  const { control } = useFormContext();
  return (
    <Controller
      control={control}
      name={name}
      render={({ field: {value, ...restFields} }) => (
        <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DateRangePicker {...restFields} value={Array.isArray(value) ? value: [null, null]}/>
        </LocalizationProvider>
      )}
    />
  );
}

export default RHFDateRangePicker;

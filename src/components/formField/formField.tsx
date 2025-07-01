// components/FormField.tsx
import{ Controller, type Control, type FieldErrors, type FieldValues } from 'react-hook-form';
import TextField from '@mui/material/TextField';

type FormFieldProps<T extends FieldValues> = {
  name: keyof T;
  label: string;
  control: Control<T>;
  errors: FieldErrors<T>;
  type?: string;
  placeholder?: string;
  format?: (value: string) => string;
  onBlur?: () => void;
  inputProps?: object;
};

export const FormField = <T extends FieldValues>({
  name,
  label,
  control,
  errors,
  type = 'text',
  placeholder,
  format,
  onBlur,
  inputProps
}: FormFieldProps<T>) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <TextField
          {...field}
          label={label}
          error={!!errors[name]}
          helperText={errors[name]?.message}
          fullWidth
          variant="outlined"
          type={type}
          placeholder={placeholder}
          onChange={(e) => {
            const value = format ? format(e.target.value) : e.target.value;
            field.onChange(value);
          }}
          onBlur={(e) => {
            field.onBlur();
            onBlur?.();
          }}
          inputProps={inputProps}
          sx={{
            '& .MuiOutlinedInput-root': {
              '&.Mui-focused fieldset': { borderColor: '#b83143' },
            },
            '& .MuiInputLabel-root.Mui-focused': { color: '#b83143' },
          }}
        />
      )}
    />
  );
};
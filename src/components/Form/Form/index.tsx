import { yupResolver } from '@hookform/resolvers/yup';
import { useForm, SubmitHandler, UseFormReturn, FieldValues, UseFormProps } from 'react-hook-form';
import * as yup from 'yup';

import ResponseAlert from '@/components/ResponseAlert';

export type YupSchemaObject<T> = Record<keyof T, yup.AnySchema>;

type FormProps<TFormValue extends FieldValues, Schema> = {
  children: (props: UseFormReturn<TFormValue>) => React.ReactNode;
  submitHandler: SubmitHandler<TFormValue>;
  validationSchema?: YupSchemaObject<Schema>;
  options?: UseFormProps<TFormValue>;
  scheme: Schema;
  error: string | null;
};

// This idea here is that you can easily compose your form with inputs. We are going to create a Form component to automatically collect form data
export const Form = <
  TFormValue extends Record<string, unknown> = Record<string, unknown>,
  Scheme extends yup.ObjectSchema<any, yup.AnyObject, any, ''> = yup.ObjectSchema<
    any,
    yup.AnyObject,
    any,
    ''
  >
>({
  children,
  submitHandler,
  options,
  scheme,
  error,
}: FormProps<TFormValue, Scheme>) => {
  const method = useForm<TFormValue, Scheme>({
    ...options,
    resolver: scheme && yupResolver(scheme),
  });
  return (
    <>
      <form autoComplete="off" onSubmit={method.handleSubmit(submitHandler)}>
        {children(method)}
      </form>

      {error && <ResponseAlert message={error} type="error" />}
    </>
  );
};

import { useCallback } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import { get } from 'lodash-es';
import { Control, FieldError, FieldValues, Path, UseFormProps, useForm as useFormHook } from 'react-hook-form';
import { AnyObjectSchema } from 'yup';
import { InitialState, evaluateInitialState } from '..';

/*
 * Wrapper over react-hook-form's useForm
 *
 * Features:
 *  - injects error while registering to automatically display correct state in Form.Field component
 *  - provides default resolver, reValidateMode and mode props
 *  - provides isSubmitDisabled flag
 * */

export type RegisterControl = (path: Path<FieldValues>) => {
  control: Control<FieldValues, unknown>;
  error: FieldError | undefined;
};

export type Register = (...args: Parameters<Control<FieldValues, unknown>['register']>) => {
  error: FieldError | undefined;
};

export const useForm = <TFieldValues extends FieldValues = FieldValues>({
  formSchema,
  ...props
}: UseFormProps<TFieldValues> & {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  formSchema: InitialState<AnyObjectSchema | any>;
}) => {
  const form = useFormHook({
    mode: 'all',
    reValidateMode: 'onBlur',
    resolver: yupResolver(evaluateInitialState(formSchema)),
    ...props,
  });

  const {
    control,
    formState: { errors, isDirty, isValid },
    register: formRegister,
  } = form;

  const register = useCallback(
    (...args: Parameters<typeof formRegister>) => {
      const [path] = args;
      const error = get(errors, path) as FieldError | undefined;
      return {
        ...formRegister(...args),
        error,
      };
    },
    // form.register never changes, we need to depend on errors only
    [errors, formRegister]
  );

  const registerControl = useCallback(
    (path: Parameters<typeof formRegister>[0]) => {
      const error = get(errors, path) as FieldError | undefined;
      return {
        control,
        error,
      };
    },
    [errors, control]
  );

  const isSubmitDisabled = !isValid || !isDirty;

  return {
    ...form,
    isSubmitDisabled,
    register,
    registerControl,
  };
};

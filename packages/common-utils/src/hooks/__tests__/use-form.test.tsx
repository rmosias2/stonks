import { act, renderHook } from '@testing-library/react';
import * as yup from 'yup';
import { useForm } from '../use-form';

const formSchema = yup
  .object({
    confirmEmail: yup.string().email().required(),
    email: yup.string().email().required(),
  })
  .required();

describe('useForm', () => {
  test('should return the correct form object', () => {
    const { result } = renderHook(() =>
      useForm({
        formSchema,
      })
    );

    const { control, formState, isSubmitDisabled, register, registerControl } = result.current;

    // Assert the properties of the form object
    expect(isSubmitDisabled).toBeDefined();
    expect(register).toBeDefined();
    expect(registerControl).toBeDefined();

    // You can also test other properties or methods of the form object if needed
    // For example:
    expect(formState.errors).toBeDefined();
    expect(control).toBeDefined();
    expect(register).toBeDefined();
  });

  test('should return the correct error when registering a field', () => {
    const { result } = renderHook(() => useForm({ formSchema: formSchema }));

    const { register } = result.current;
    const { error } = register('email');

    expect(error).toBeUndefined();

    // Simulate an error
    act(() => {
      result.current.setError('email', { message: 'Field is required', type: 'required' });
    });

    expect(result.current.formState.errors).toEqual({
      email: {
        message: 'Field is required',
        ref: { name: 'email' },
        type: 'required',
      },
    });
  });

  test('should return the control and error when registering a control', () => {
    const { result } = renderHook(() => useForm({ formSchema: formSchema }));

    const { registerControl } = result.current;

    const { control, error } = registerControl('email');

    expect(control).toBeDefined();
    expect(error).toBeUndefined();

    // Simulate an error
    act(() => {
      result.current.setError('email', { message: 'Field is required', type: 'required' });
    });

    expect(result.current.formState.errors).toEqual({
      email: {
        message: 'Field is required',
        ref: undefined,
        type: 'required',
      },
    });
  });
});

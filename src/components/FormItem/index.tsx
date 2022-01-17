import {EvaStatus} from '@ui-kitten/components/devsupport';
import React from 'react';
import {
  Controller,
  UseControllerProps,
  ControllerRenderProps,
  ControllerFieldState,
  UseFormReturn,
} from 'react-hook-form';

type IRenderProps<FormType extends UseFormReturn> = {
  fieldState: ControllerFieldState;
  formState: FormType['formState'];
  status?: EvaStatus;
  caption?: string;
  placeholder?: string;
  label?: string;
} & ControllerRenderProps<any>;

interface Props<
  FormType extends UseFormReturn,
  ComponentType extends React.ElementType,
> {
  render?: (props: IRenderProps<FormType>) => React.ReactElement;
  name: keyof FormType['formState']['errors'];
  defaultValue?: any;
  rules?: UseControllerProps['rules'];
  caption?: string;
  placeholder?: string;
  label?: string;
  status?: EvaStatus;
  component?: ComponentType;
  onChangeKey?: keyof React.ComponentProps<ComponentType>;
  componentProps?: React.ComponentProps<ComponentType>;
  form: FormType;
}
export default function FormItem<
  FormType,
  ComponentType extends React.ElementType,
>(
  // @ts-ignore
  props: Props<FormType, ComponentType>,
) {
  const {
    name,
    render,
    component,
    componentProps,
    onChangeKey,
    defaultValue,
    rules,
    caption,
    placeholder,
    label,
    status,
    form,
  } = props;

  return (
    <Controller
      name={name as string}
      // @ts-ignore
      control={form.control}
      defaultValue={defaultValue}
      rules={rules}
      render={controllerProps => {
        const hasError = controllerProps.fieldState.invalid;

        const inputProps = {
          ...(componentProps as object),
          ...controllerProps.field,
          placeholder,
          label,
          fieldState: controllerProps.fieldState,
          formState: controllerProps.formState,
          status: hasError ? 'danger' : status,
          caption: hasError
            ? controllerProps.fieldState.error?.message
            : caption,
        };

        if (onChangeKey) {
          inputProps.onChange = undefined as any;
          // @ts-ignore
          inputProps[onChangeKey] = controllerProps.field.onChange;
        }

        const Component = component as any;

        if (Component) {
          return <Component {...inputProps} />;
        }

        const input = render!(inputProps as IRenderProps<any>);
        return input;
      }}
    />
  );
}

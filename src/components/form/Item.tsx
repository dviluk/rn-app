import {EvaStatus} from '@ui-kitten/components/devsupport';
import React from 'react';
import {
  Controller,
  UseControllerProps,
  ControllerRenderProps,
  ControllerFieldState,
  UseFormStateReturn,
} from 'react-hook-form';
import {FormContext} from './context';

type IRenderProps = {
  fieldState: ControllerFieldState;
  formState: UseFormStateReturn<any>;
  status?: EvaStatus;
  caption?: string;
  placeholder?: string;
  label?: string;
} & ControllerRenderProps;

interface Props {
  render: (props: IRenderProps) => React.ReactElement;
  name: string;
  defaultValue?: any;
  rules?: UseControllerProps['rules'];
  caption?: string;
  placeholder?: string;
  label?: string;
  status?: EvaStatus;
}
export default function Item(props: Props) {
  const {
    name,
    render,
    defaultValue,
    rules,
    caption,
    placeholder,
    label,
    status,
  } = props;

  return (
    <FormContext.Consumer>
      {form => {
        return (
          <Controller
            name={name}
            control={form.control}
            defaultValue={defaultValue}
            rules={rules}
            render={controllerProps => {
              const hasError = form.formState.errors[name] !== undefined;

              return render({
                ...controllerProps.field,
                placeholder,
                label,
                fieldState: controllerProps.fieldState,
                formState: controllerProps.formState,
                ...{
                  status: hasError ? 'danger' : status,
                  caption: hasError
                    ? form.formState.errors[name].message
                    : caption,
                },
              });
            }}
          />
        );
      }}
    </FormContext.Consumer>
  );
}

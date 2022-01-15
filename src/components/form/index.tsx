import React from 'react';
import {useForm} from 'react-hook-form';
import {FormContext} from './context';
import FormItem from './Item';

interface Props<Resolver> {
  children: React.ReactNode;
  resolver?: Resolver;
}

export default function Form<FormInputs, Reolver>(props: Props<Reolver>) {
  const {children} = props;

  const form = useForm<FormInputs>();

  return <FormContext.Provider value={form}>{children}</FormContext.Provider>;
}

Form.Item = FormItem;

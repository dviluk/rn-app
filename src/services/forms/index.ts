import {yupResolver} from '@hookform/resolvers/yup';
import {useForm, UseFormProps} from 'react-hook-form';
import * as yup from 'yup';

export const resolver = yup.object({
  name: yup.string().required(),
});

export function useSuperForm<Resolver extends yup.AnyObjectSchema>(
  resolver: Resolver,
  options: UseFormProps<yup.InferType<Resolver>> = {},
) {
  const form = useForm<yup.InferType<Resolver>>({
    resolver: yupResolver(resolver),
    ...options,
  });

  return form;
}

const Forms = {
  Test: {
    resolver,
  },
};

export default Forms;

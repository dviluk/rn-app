import React from 'react';
import {UseFormReturn} from 'react-hook-form';

type IFormContext = UseFormReturn<any, object>;

// @ts-ignore
export const FormContext = React.createContext<IFormContext>({});

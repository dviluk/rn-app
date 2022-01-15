import React from 'react';
import {Button, Input} from '@ui-kitten/components';
import Form from 'components/form';
import {FormContext} from 'components/form/context';
import Screen from 'components/screen';

import * as yup from 'yup';

interface IForm {
  name: string;
}

const resolver = yup.object({
  name: yup.string().required(),
});
type IFormm = string;

export default function FormScreen() {
  function onSubmit(data: any) {
    console.log(data);
  }

  return (
    <Screen title="Form">
      <Form<IForm> resolver={resolver}>
        <FormContext.Consumer>
          {form => {
            return (
              <>
                <Form.Item
                  name="name"
                  caption="Caption"
                  label="name"
                  placeholder="Name here"
                  rules={{
                    required: true,
                  }}
                  render={inputProps => {
                    return (
                      <Input
                        {...inputProps}
                        onChangeText={inputProps.onChange}
                        onChange={undefined}
                      />
                    );
                  }}
                />
                <Button onPress={form.handleSubmit(onSubmit)}>Submit</Button>
              </>
            );
          }}
        </FormContext.Consumer>
      </Form>
    </Screen>
  );
}

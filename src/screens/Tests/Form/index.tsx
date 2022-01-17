import React from 'react';
import {Button, Input, Text} from '@ui-kitten/components';
import Screen from 'components/screen';

import FormItem from 'components/FormItem';
import Forms, {useSuperForm} from 'services/forms';
import {App} from '@app';

export default function FormScreen() {
  const form = useSuperForm(Forms.Test.resolver);

  function onSubmit(data: App.Forms.Test) {
    console.log(data);
  }

  return (
    <Screen title="Form">
      <FormItem
        form={form}
        name="name"
        caption="Caption"
        label="name"
        placeholder="Name here"
        component={Input}
        onChangeKey="onChangeText"
      />
      {form.formState.isSubmitted && !form.formState.isValid && (
        <Text status="danger">Invalid</Text>
      )}
      <Button onPress={form.handleSubmit(onSubmit)}>Submit</Button>
    </Screen>
  );
}

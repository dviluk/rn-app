import * as yup from 'yup';
import Forms from 'services/forms';

declare namespace App {
  export namespace Forms {
    type Test = yup.InferType<typeof Forms.Test.resolver>;
  }
}

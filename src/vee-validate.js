import * as rules from 'vee-validate/dist/rules';
import en from 'vee-validate/dist/locale/en';
import {
  extend
} from 'vee-validate';

for (let rule in rules) {
  extend(rule, {
    ...rules[rule],
    message: en.messages[rule]
  });
}
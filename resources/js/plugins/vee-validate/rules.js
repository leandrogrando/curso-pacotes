import { required, email, max, min, confirmed, alpha_dash as alphaDash } from 'vee-validate/dist/rules'
import { extend } from 'vee-validate'
import { validateSubdomain } from '../../services/validations'
import * as EREG from './eregs'

/*
 * vee-validate rules
 */

extend('required', {
  ...required,
  message: 'This field is required!!'
})

extend('min', {
  ...min,
  message: 'Campo precisa ter {length} characters ou mais'
})

extend('max', {
  ...max,
  message: 'This field must be {length} characters or less'
})

extend('email', {
  ...email,
  message: 'This field must be a valid email'
})

extend('confirmed', {
  ...confirmed,
  message: 'Os campos nao conferem'
})

extend('alpha_dash', {
  ...alphaDash,
  message: 'Somente letras, números, traço e underline'
})

/*
 * eregs
 */

extend('domain', {
  validate: value => value.match(EREG.EREG_DOMAIN),
  message: 'Domínio inválido!'
})

extend('contain_numbers', {
  validate: value => value.match(EREG.EREG_CONTAIN_NUMBERS),
  message: 'precisa ter um número!'
})

extend('contain_letters', {
  validate: value => value.match(EREG.EREG_CONTAIN_LETTERS),
  message: 'precisa ter uma letra!'
})

/*
 * backend validations
 */

extend('subdomain', async value => {
  return await validateSubdomain(value)
})

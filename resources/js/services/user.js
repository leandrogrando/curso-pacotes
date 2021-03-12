import axios from '../plugins/axios'

export const setLanguage = language => {
  return axios.post(route('user.set-language'), { locale: language })
}

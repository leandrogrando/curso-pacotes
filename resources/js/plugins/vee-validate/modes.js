/*
 * Se o campo possui erros, valida todos os eventos até ficar sem erro nenhum
 * Se não possui erros, valida só no submit
 */

export const modeComrade = ({ errors }) => {
  if (errors.length) {
    return {
      on: ['input', 'blur']
    }
  }
  return {
    on: []
  }
}

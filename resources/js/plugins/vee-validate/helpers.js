export const getValidationState = ({ invalid, validated }) => {
  return validated && invalid ? false : null
}

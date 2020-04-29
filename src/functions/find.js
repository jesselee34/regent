import isRule from '../private/is-rule'

export default (logic, data) => logic.find((x) => {
  if (isRule(x.rule)) {
    return x.rule(data)
  }

  return false
})
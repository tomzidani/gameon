export const isEmpty = (val) => {
  return val == null || val.length === 0
}

export const isBetween = (val, min = 0, max = 10000) => {
  if (isNaN(val)) return val.length >= min && val.length <= max
  return val >= min && val <= max
}

export const isEmail = (val) => {
  return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    val
  )
}

export const isNumeric = (val) => {
  return Number.isInteger(val)
}

export const isOneChecked = (arr) => {
  return Array.from(arr).find((r) => r.checked)?.value || false
}

export const isObjectEmpty = (obj) => {
  return Object.values(obj).every((val) => val.length === 0)
}

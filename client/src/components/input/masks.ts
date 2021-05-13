export function cep(event: any) {
  event.currentTarget.maxLength = 9
  let val = event.currentTarget.value
  val = val.replace(/\D/g, "")
  val = val.replace(/^(\d{5})(\d)/, '$1-$2')
  event.currentTarget.value = val
}

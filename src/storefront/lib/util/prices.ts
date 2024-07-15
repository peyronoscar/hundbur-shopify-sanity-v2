

type FormatAmountParams = {
  amount?: string
  currencyCode?: string,
  minimumFractionDigits?: number
}

export const formatAmount = ({
  amount,
  currencyCode,
  minimumFractionDigits = 0
}: FormatAmountParams) => {

  if (!amount || !currencyCode) {
    return ""
  }

  return new Intl.NumberFormat("sv-SE", {
    style: "currency",
    currency: currencyCode,
    currencyDisplay: "narrowSymbol",
    minimumFractionDigits,
  }).format(parseFloat(amount))
}
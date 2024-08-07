type QuantityResultsType = {
  quantity: number
  searchTerm: string
}

const QuantityResults = ({ quantity, searchTerm }: QuantityResultsType) => {
  if (!searchTerm || searchTerm === "") return null

  return (
    <div className='text-white text-sm'>
      Mostrando <strong>{quantity}</strong> resultados para {searchTerm}
    </div>
  )
}

export default QuantityResults

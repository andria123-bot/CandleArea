import { useState, useEffect } from "react"

const Products = () => {
    const [, setProducts] = useState([])

    useEffect(() => {
        const fetchedProducts = async () => {
            try {
                const response = await fetch('/products')
                const data = await response.json()
                setProducts(data)
                console.log(data)
            } catch (error) {
                console.error('Error fetching products:', error)
            }
        }
        fetchedProducts()
    })

  return (
    <div></div>
  )
}

export default Products
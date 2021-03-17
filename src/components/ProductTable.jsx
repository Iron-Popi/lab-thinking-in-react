import React, { Component } from 'react'
import ProductRow from './ProductRow';

class ProductTable extends Component {
    render() {
        const prodDiv = [];

        this.props.products.forEach((product) => {
            prodDiv.push(
              <ProductRow
                product={product}
                key={product.name} />
            )
        })
        return (
            <div>
                <div>
                <strong>Products   Price</strong>
                </div>
                <div>
                    {prodDiv}
                </div>
            </div>
        )
    }
}

export default ProductTable

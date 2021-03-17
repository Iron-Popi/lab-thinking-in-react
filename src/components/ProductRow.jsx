import React, { Component } from 'react'

class ProductRow extends Component {
    render() {
        const product = this.props.product;
        return (
            <div>
                <p>{product.name}  {product.price}</p> 
            </div>
        )
    }
}

export default ProductRow

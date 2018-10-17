import React from "react"
import { connect } from "react-redux"


function sort(items) {
    return items.sort((a,b) => a.id < b.id)
}

function Cart (props) {
    return <table>
        <thead>
            <tr>
                <th></th>
                <th>Item</th>
                <th>Quantity</th>
                <th>Price</th>
                <th></th>
            </tr>
        </thead>
        <tbody>
            {
                sort(props.cart).map(item => <tr>
                    <td>
                        <img className="img-thumbnail"
                            title={ item.name }
                            src={item.image}
                        />                        
                    </td>
                    <td>{ item.name }</td>
                    <td>{ item.quantity }</td>
                    <td>${ item.price * item.quantity}</td>
                    <td>
                        <button type="button" class="btn btn-success"
                            onClick={() => props.addToCart(item)}
                        >+</button>
                    </td>
                    <td>
                        <button type="button" class="btn btn-danger"
                            onClick={() => props.removeFromCart(item)}
                        >-</button>
                    </td>
                    <td><button type="button" class="btn btn-danger"
                            onClick={() => props.removeAllFromCart(item)}
                        >Remove all from cart</button>
                    </td>
                    </tr>)
            }
        </tbody>
    </table>
}

function mapStateToProps(state) {
    return {
        cart: state.cart,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        addToCart: (item) => {
            dispatch({ type: "ADD", payload: item })
        },
        removeFromCart: (item) => {
            dispatch({type: "REMOVE", payload: item})
        },
        removeAllFromCart: (item) => {
            dispatch({type: "REMOVE_ALL", payload: item})
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart)

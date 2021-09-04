import React, {useState} from 'react'
import { buyCake } from '../redux/cake/cakeActions'
import { connect } from 'react-redux'

function NewCakeContainer(props) {
    const [number, setNumber] = useState(1)  
    return (
        <div>
            <h2>Number Of Cakes - {props.numOfCakes}</h2>
            <input type="text" value={number} onChange={e => setNumber(e.target.value)}/>
            <button onClick={() => props.buyCake(number)}>Buy {number} Cakes</button>
        </div>
    )
}
const mapStateToProps = state =>{
    return{
        numOfCakes: state.numOfCakes
    }
}
const mapDispatchToProps = dispatch =>{
    return{
        buyCake: number => dispatch(buyCake(number))
    }
}
export default connect( // react ile aradaki bağlantıyı sağlamak için
    mapStateToProps,
    mapDispatchToProps
    )(NewCakeContainer)

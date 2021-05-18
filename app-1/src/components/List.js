// will be responsible for rendering a mapped list of todos which will be passed as props from App.js
const List = (props) => {
    return(
        <h2>{props.li}</h2>
    )
}

export default List
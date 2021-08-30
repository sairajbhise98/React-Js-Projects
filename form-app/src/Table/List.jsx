import './Table.css';

const List = (props) => {
    //console.log(props)
    return (
        <tr>
            <td>{props.firstName}</td>
            <td>{props.lastName}</td>
            <td>{props.age}</td>
            <td>{props.city}</td>
        </tr>
    );
}

export default List;
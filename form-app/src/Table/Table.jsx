import List from './List';
import './Table.css';

const Table = (props) => {

    const userData = props.data;
    //console.log(userData)

    return (
        <div className='table'>
            <table className='center' border='1' >
                <tbody>
                <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Age</th>
                    <th>City</th>
                </tr>
                {userData.map((data)=>{
                    return <List 
                        key = {Math.random()}
                        firstName = {data.FirstName}
                        lastName = {data.LastName}
                        age = {data.Age} 
                        city = {data.City}     
                    />
                })}
                </tbody>
            </table>
        </div>
    );
}

export default Table;
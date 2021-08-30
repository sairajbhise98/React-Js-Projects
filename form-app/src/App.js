import { useEffect, useState } from "react";
import Form from "./Form/Form";
import Table from "./Table/Table";
import Search from "./Search/Search";
const App = () => {
  const [userArray, setUserArray] = useState([]);
  const [tempUserArray, setTempArray] = useState(userArray);
  const [tag, setTag] = useState("fname");

  // Fetching Data from Local Storage
  useEffect(() => {
    const data = localStorage.getItem("userArray");
    if (data) {
      setUserArray(JSON.parse(data));
    }
  }, []);

  // Adding Data to local Storage
  useEffect(() => {
    localStorage.setItem("userArray", JSON.stringify(userArray));
    setTempArray(userArray);
  }, [userArray]);

  // Adding user to array
  const saveUser = (userData) => {
    //console.log(userData);
    setUserArray((prevState) => {
      return [userData, ...prevState];
    });
    alert("Data Added Successfully!!");
    //console.log(userArray)
  };

  // Filter Handler
  const filterHandler = (filter) => {
    // console.log(filter)
    if (filter === "fname") {
      setTag("fname");
    } else if (filter === "lname") {
      setTag("lname");
    } else if (filter === "age") {
      setTag("age");
    } else if (filter === "city") {
      setTag("city");
    } else {
      setTag("#");
    }
  };

  // Search Entry
  const searchEntry = (entry) => {
    if (entry.length === 0) {
      setTempArray([...userArray]);
    } else {
      if (tag === "fname") {
        setTempArray(
          userArray.filter((user) =>
            user.FirstName.toLowerCase().includes(entry)
          )
        );
      }
      if (tag === "lname") {
        setTempArray(
          userArray.filter((user) =>
            user.LastName.toLowerCase().includes(entry)
          )
        );
      }
      if (tag === "age") {
        setTempArray(
          userArray.filter((user) => user.Age.toLowerCase().includes(entry))
        );
      }
      if (tag === "city") {
        setTempArray(
          userArray.filter((user) => user.City.toLowerCase().includes(entry))
        );
      } else {
        return;
      }
    }
  };

  return (
    <div>
      <Form onSaveUser={saveUser} />
      <Search filter={filterHandler} value={searchEntry} />
      <Table data={tempUserArray} />
    </div>
  );
};

export default App;

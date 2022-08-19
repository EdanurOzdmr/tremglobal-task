import { useState, useContext } from "react";
import { AppContext } from "../Context";
const Form = () => {
    const { insertUser } = useContext(AppContext);
    const [newUser, setNewUser] = useState({});

    // Storing the Insert User Form Data.
    const addNewUser = (e, field) => {
        setNewUser({
            ...newUser,
            [field]: e.target.value,
        });
    };

    // Inserting a new user into the Database.
    const submitUser = (e) => {
        e.preventDefault();
        insertUser(newUser);
        e.target.reset();
    };

    return (
        <form className="insertForm" onSubmit={submitUser}>
            <h2>User Form</h2>
            <label htmlFor="_name">Name</label>
            <input
                type="text"
                id="_name"
                onChange={(e) => addNewUser(e, "name")}
                placeholder="Enter name"
                autoComplete="off"
                required
            />
            <label htmlFor="_email">Email</label>
            <input
                type="email"
                id="_email"
                onChange={(e) => addNewUser(e, "email")}
                placeholder="Enter email"
                autoComplete="off"
                required
            />
            <label htmlFor="_telephone">Telephone</label>
            <input
                type="text"
                id="_telephone"
                onChange={(e) => addNewUser(e, "telephone")}
                placeholder="Enter telephone"
                autoComplete="off"
                required
            />
            <input type="submit" value="Submit" />
        </form>
    );
};

export default Form;

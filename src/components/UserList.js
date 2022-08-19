import { useContext, useState } from "react";
import { AppContext } from "../Context";

const UserList = () => {
    const {
        users,
        userLength,
        editMode,
        cancelEdit,
        updateUser,
        deleteUser,
    } = useContext(AppContext);

    // Storing users new data when they editing their info.
    const [newData, setNewData] = useState({});

    const saveBtn = () => {
        updateUser(newData);
    };

    const updateNewData = (e, field) => {
        setNewData({
            ...newData,
            [field]: e.target.value,
        });
    };

    const enableEdit = (id, name, email, telephone) => {
        setNewData({ id, name, email, telephone });
        editMode(id);
    };

    const deleteConfirm = (id) => {
        if (window.confirm("Are you sure?")) {
            deleteUser(id);
        }
    };

    return !userLength ? (
        <p>{userLength === null ? "Loading..." : "Please insert some users."}</p>
    ) : (
        <table>
            <thead>
            <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Telephone</th>
                <th>Action</th>
            </tr>
            </thead>
            <tbody>
            {users.map(({ id, name, email, telephone, isEditing }) => {
                return isEditing === true ? (
                    <tr key={id}>
                        <td>
                            <input
                                type="text"
                                defaultValue={name}
                                onChange={(e) => updateNewData(e, "name")}
                            />
                        </td>
                        <td>
                            <input
                                type="email"
                                defaultValue={email}
                                onChange={(e) => updateNewData(e, "email")}
                            />
                        </td>
                        <td>
                            <input
                                type="text"
                                defaultValue={telephone}
                                onChange={(e) => updateNewData(e, "telephone")}
                            />
                        </td>
                        <td>
                            <button className="btn green-btn" onClick={() => saveBtn()}>
                                Save
                            </button>
                            <button
                                className="btn default-btn"
                                onClick={() => cancelEdit(id)}
                            >
                                Cancel
                            </button>
                        </td>
                    </tr>
                ) : (
                    <tr key={id}>
                        <td>{name}</td>
                        <td>{email}</td>
                        <td>{telephone}</td>
                        <td>
                            <button
                                className="btn default-btn"
                                onClick={() => enableEdit(id, name, email, telephone)}
                            >
                                Edit
                            </button>
                            <button
                                className="btn red-btn"
                                onClick={() => deleteConfirm(id)}
                            >
                                Delete
                            </button>
                        </td>
                    </tr>
                );
            })}
            </tbody>
        </table>
    );
};

export default UserList;

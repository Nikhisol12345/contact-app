import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { editContact } from '../Redux/action';

function EditContact() {
    const { id } = useParams();
    const dispatch = useDispatch();
    const allContacts = useSelector((store) => store.contacts);
    const contact = allContacts.find((el) => el.id == id) || {};

    const [form, setForm] = useState(contact);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm((prevForm) => ({
            ...prevForm,
            [name]: value,
        }));
    };

    const handleSave = () => {
        dispatch(editContact({ id, ...form }));
    };

    return (
        <div className="w-1/2 mx-auto my-4 pt-16 text-white">
            <h2 className="text-2xl font-bold mb-4">Edit Contact</h2>
            <div className="mb-4">
                <label className="block font-bold mb-2" htmlFor="first-name">
                    First Name
                </label>
                <input
                    className="w-full border border-gray-400 p-2 rounded-md bg-gray-700"
                    id="first-name"
                    type="text"
                    name="first_name"
                    value={form.first_name || ''}
                    onChange={handleChange}
                />
            </div>
            <div className="mb-4">
                <label className="block font-bold mb-2" htmlFor="last-name">
                    Last Name
                </label>
                <input
                    className="w-full border border-gray-400 p-2 rounded-md bg-gray-700"
                    id="last-name"
                    type="text"
                    name="last_name"
                    value={form.last_name || ''}
                    onChange={handleChange}
                />
            </div>
            <div className="mb-4">
                <label className="block font-bold mb-2" htmlFor="last-name">
                    Mobile Number
                </label>
                <input
                    className="w-full border border-gray-400 p-2 rounded-md bg-gray-700"
                    id="last-name"
                    type="number"
                    name="mob"
                    value={form.mob || ''}
                    onChange={handleChange}
                />
            </div>
            <div className="mb-4">
                <label className="block font-bold mb-2" htmlFor="status">
                    Status
                </label>
                <select
                    className="w-full border border-gray-400 p-2 rounded-md bg-gray-700"
                    id="status"
                    name="status"
                    value={form.status || 'active'}
                    onChange={handleChange}
                >
                    <option value={'active'}>Active</option>
                    <option value={"inactive"}>Inactive</option>
                </select>
            </div>
            
            <button onClick={handleSave} class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-xl text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
                  
                  <span class="relative  py-2 px-4 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0" >
                  Save Contact
                  </span>
                
              </button>
        </div>
    );
}

export default EditContact;

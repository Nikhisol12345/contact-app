import { useState } from 'react';
import { useDispatch } from "react-redux";
import { addContact } from '../Redux/action';

function ContactForm() {
    const dispatch = useDispatch();

    const [form, setForm] = useState({
        first_name: "",
        last_name: "",
        mob: "",
        status: "active"
    });

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    };

    function handleSave() {
        dispatch(addContact(form));
    }

    return (
        <div className="w-1/2 mx-auto my-4 pt-16">
            <h2 className="text-2xl font-bold text-white mb-4">Create Contact</h2>
            <div className="bg-gray-800 rounded-lg p-6 shadow-md mb-4">
                <label className="block text-white font-bold mb-2" htmlFor="first-name">
                    First Name
                </label>
                <input
                    className="w-full border border-gray-600 bg-gray-900 text-white p-2 rounded-md"
                    id="first-name"
                    type="text"
                    name="first_name"
                    value={form.first_name}
                    onChange={handleChange}
                />
            </div>
            <div className="bg-gray-800 rounded-lg p-6 shadow-md mb-4">
                <label className="block text-white font-bold mb-2" htmlFor="last-name">
                    Last Name
                </label>
                <input
                    className="w-full border border-gray-600 bg-gray-900 text-white p-2 rounded-md"
                    id="last-name"
                    type="text"
                    name="last_name"
                    value={form.last_name}
                    onChange={handleChange}
                />
            </div>
            <div className="bg-gray-800 rounded-lg p-6 shadow-md mb-4">
                <label className="block text-white font-bold mb-2" htmlFor="last-name">
                    Mobile Number
                </label>
                <input
                    className="w-full border border-gray-600 bg-gray-900 text-white p-2 rounded-md"
                    id="last-name"
                    type="number"
                    name="mob"
                    min='10'
                    max='10'
                    value={form.mob}
                    onChange={handleChange}
                />
            </div>
            <div className="bg-gray-800 rounded-lg p-6 shadow-md mb-4">
                <label className="block text-white font-bold mb-2" htmlFor="status">
                    Status
                </label>
                <select
                    className="w-full border border-gray-600 bg-gray-900 text-white p-2 rounded-md"
                    id="status"
                    name="status"
                    value={form.status}
                    onChange={handleChange}
                >
                    <option value={'active'}>Active</option>
                    <option value={"inactive"}>Inactive</option>
                </select>
            </div>
            <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                onClick={handleSave}
            >
                Save Contact
            </button>
        </div>
    );
}

export default ContactForm;

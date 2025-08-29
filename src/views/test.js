import axios from 'axios';

const API_URL = "https://genbackend-qsc0.onrender.com"

let data = [];

const fetchUsers = async () => {
    try {
        const res = await axios.get(`${API_URL}/members`);
        data = res.data.data;
        console.log(typeof data)
        //console.log("Fetched users:", data);
    } catch (error) {
        console.error("Fail to fetch users", error);
    }
};

const handleDelete = async (id) => {
    try {
        await axios.delete(`${API_URL}/member/${id}`);
        console.log("Deleted user with id:", id);
    } catch (err) {
        console.error("Failed to delete user with id:", id, err);
    }
};

// 👇 Wrap in async IIFE
(async () => {
    console.log("hi 1");
    console.log("hi 2");
    console.log("hi 3");
    console.log("hi 4");

    await fetchUsers(); // wait for data to be fetched

    console.log("hi 5");
    console.log("start deleting");

    // delete users sequentially
    for (const d of data) {
        await handleDelete(d.id); // use await to ensure proper order
    }

    console.log("done deleting");
})();

// console.log("Start posting")
// for (let i = 0; i < 1000000; i++) {
//         const n = i + 100
//         const form = {name: "Bestza", email: `email${n.toString()}@email.com` , role: "user"}
//         await axios.post(API_URL,form)
// }
    
// console.log("Done posting")
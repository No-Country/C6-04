import axios from "axios";

const handleSubmmit = async (username, email, password) => {
    try {
        const userRegister = await axios.post("https://localhost:4000/user", {
            username,     
            email,
            password
        })
        res.json({
            ok: true,
            usuario: userRegister,
        });
    } catch (error) {
        res.status(400).json({
        ok: false,
        msg: "no se pudo registrar el usuario",
        });
    }
};

export default handleSubmmit;
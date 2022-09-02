const login = async (email, password) => {
    try {
        const authLogin = await axios.post("https://localhost:4000/auth", {
            email,
            password
        })
        res.json({
            ok: true,
            usuario: existEmail,
        });
    } catch (error) {
        res.status(400).json({
        ok: false,
        msg: "no se pudo autenticar"
        });
    }
};

export default login;
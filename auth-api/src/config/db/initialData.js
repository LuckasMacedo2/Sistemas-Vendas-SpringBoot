import bcrypt from "bcrypt";
import User from "../../modules/user/model/User";

export async function createInicitalData() {
    try {
        await User.sync({ force: true });

        let password = await bcrypt.hash("123123", 10)
        await User.create({
            name: "User Test",
            email: "teste@teste.com.br",
            password: password
        });

        await User.create({
            name: "User Test 2",
            email: "teste@teste2.com.br",
            password: password
        });
    } catch (err) {
        console.log(err)
    }

}
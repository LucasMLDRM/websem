import MyForm from "../form/form"
import Logo from "../../../../assets/seramh.png"
import './login.css'


const Login = () => {
    return (
        <div className="login-cont">
        <div className="center-logo">
            <img src={Logo} />
        </div>
        <MyForm/>
        </div>
    )
}
export default Login
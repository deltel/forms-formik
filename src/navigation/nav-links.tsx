import { Link } from "react-router-dom"

export const NavLinks = () => (
    <ul>
        <li>
            <Link to="/">Home</Link>
        </li>
        <li>
            <Link to="/formik-wrapper">Formik Wrapper</Link>
        </li>
        <li>
            <Link to="/formik-reduced-boilerplate">Less Boilerplate</Link>
        </li>
    </ul>
);
import { NavLink } from "react-router-dom";

export default function NavMenu() {
    return (
        <div className="navbar bg-base-100 shadow-sm">
            <div className="flex-1">
                <a className="btn btn-ghost text-xl">Users App</a>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal px-1">
                    <li>
                        <NavLink
                            to="/"
                            end
                            className={({ isActive }) =>
                                isActive
                                    ? "font-semibold text-primary bg-base-200 rounded-lg"
                                    : "hover:text-primary"
                            }
                        >
                            Inicio
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/users/create"
                            className={({ isActive }) =>
                                isActive
                                    ? "font-semibold text-primary bg-base-200 rounded-lg"
                                    : "hover:text-primary"
                            }
                        >
                            Crear Nuevo Usuario
                        </NavLink>
                    </li>
                </ul>
            </div>
        </div>
    );
}

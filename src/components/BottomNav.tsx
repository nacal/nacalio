import { Home, User } from "lucide-react";
import { NavLink } from "react-router";

export default function BottomNav() {
	return (
		<nav className="fixed bottom-6 left-1/2 z-20 flex -translate-x-1/2 items-center justify-center gap-8 rounded-full bg-gray-900/80 px-8 py-3 backdrop-blur">
			<NavLink
				to="/"
				className={({ isActive }) =>
					`flex flex-col items-center gap-1 text-xs transition ${isActive ? "text-gray-100" : "text-gray-500 hover:text-gray-300"}`
				}
			>
				<Home size={20} />
				Home
			</NavLink>
			<NavLink
				to="/about"
				className={({ isActive }) =>
					`flex flex-col items-center gap-1 text-xs transition ${isActive ? "text-gray-100" : "text-gray-500 hover:text-gray-300"}`
				}
			>
				<User size={20} />
				About
			</NavLink>
		</nav>
	);
}

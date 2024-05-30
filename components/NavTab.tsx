export default function NavTab() {
    return (
        <nav className="bg-base-200 w-full p-4 flex justify-around items-center shadow-lg">
            <a
                href="#"
                className="p-2 bg-base-300 rounded-md transition duration-300 ease-in-out transform hover:bg-base-400 active:bg-base-500 hover:scale-105"
            >
                Online
            </a>
            <a
                href="#"
                className="p-2 bg-base-300 rounded-md transition duration-300 ease-in-out transform hover:bg-base-400 active:bg-base-500 hover:scale-105"
            >
                All
            </a>
            <a
                href="#"
                className="p-2 bg-base-300 rounded-md transition duration-300 ease-in-out transform hover:bg-base-400 active:bg-base-500 hover:scale-105"
            >
                Pending
            </a>
            <a
                href="#"
                className="p-2 bg-base-300 rounded-md transition duration-300 ease-in-out transform hover:bg-base-400 active:bg-base-500 hover:scale-105"
            >
                Add Friend
            </a>
        </nav>
    );
}
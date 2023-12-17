import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFileContract, faClipboardCheck, faDoorOpen } from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom";
import Cookies from 'js-cookie'

const MainLayout = ({ pagina }) => {
    return (
        <>
            <div>
                <aside className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
                    <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
                        <ul className="space-y-2 font-medium">
                            <li>
                                <Link to="/criarprova" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                    <FontAwesomeIcon className="mr-4" icon={faFileContract} />
                                    <span className="ms-3">Criar provas</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/classificarprovas" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                    <FontAwesomeIcon className="mr-4" icon={faClipboardCheck} />
                                    <span className="ms-3">Classificar provas</span>
                                </Link>
                            </li>
                            <li>
                                <button onClick={() => {Cookies.remove('token'); window.location = '/login'}} className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                    <FontAwesomeIcon className="mr-4" icon={faDoorOpen} />
                                    <span className="ms-3">Sair</span>
                                </button>
                            </li>
                        </ul>
                    </div>
                </aside>
            </div>

            <div className="p-4 sm:ml-64">
                <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700">
                    {pagina}
                </div>
            </div>
        </>

    );
};

export default MainLayout;
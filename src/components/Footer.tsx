import react from 'react';

interface Footerprops {
    title: string;

}
const Footer: React.FC<Footerprops> = ({ title }) => {
    return (
    <footer className="bg-gray-100">
        <div className="relative mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8 lg:pt-24">
            <div className="absolute end-4 top-4 sm:end-6 sm:top-6 lg:end-8 lg:top-8">
                <a
                    className="inline-block rounded-full bg-[#181b32] p-2 text-white shadow-sm transition hover:bg-[#181b32]/90 sm:p-3 lg:p-4"
                    href="#MainContent"
                >
                    <span className="sr-only">Back to top</span>

                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="size-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                    >
                        <path
                            fill-rule="evenodd"
                            d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
                            clip-rule="evenodd"
                        />
                    </svg>
                    
                </a>
            </div>

 {/*            <div className="lg:flex lg:items-end lg:justify-between">
                <div>
                    <div className="flex justify-center text-teal-600 lg:justify-start">
                        
                        <img className="h-12" src="/logoJB.svg" alt="Logo" />

                    </div>

                    <p className="mx-auto mt-6 max-w-md text-center leading-relaxed text-gray-500 lg:text-left">
  Hagas lo que hagas, hazlo con el <img className="h-6 inline-block align-middle" src="/corazon.svg" alt="corazón" />
</p>

                </div>

                <ul
                    className="mt-12 flex flex-wrap justify-center gap-6 md:gap-8 lg:mt-0 lg:justify-end lg:gap-12 text-s"
                >
                    <li>
                        <a className="text-gray-700 transition hover:text-gray-700/75" href="about"> About </a>
                    </li>

                    <li>
                        <a className="text-gray-700 transition hover:text-gray-700/75" href="#"> Services </a>
                    </li>

                    <li>
                        <a className="text-gray-700 transition hover:text-gray-700/75" href="#"> Projects </a>
                    </li>

                    <li>
                        <a className="text-gray-700 transition hover:text-gray-700/75" href="#"> Blog </a>
                    </li>
                </ul>
            </div> */}

            <p className="mt-12 text-center text-sm text-gray-500 lg:text-right">
                Copyright &copy; {new Date().getFullYear()} | All rights REVERSED
            </p>
        </div>
    </footer>
    );
}
export default Footer;
import { links } from "../data"

const Navbar = () => {
  return (
    <nav className="bg-sky-100">
    {/*two waves + ... means off edit mode */}
        <div className='align-element py-4 flex flex-col sm:flex-row sm:gap-x-16 sm:items-center sm:py-8'>
            <h2 className="text-3xl font-bold">
                Web <span className="text-blue-800">Dev</span>
            </h2>
        </div>
        <div className="flex gap-x-3">
            {links.map((link)=>{
                //destructure the array of links
                const {id, href, text} = link
                return (
                    <a 
                    key={id} 
                    href={href}
                    className="capitalize text-lg tracking-wide hover:text-yellow-500 duration-300">
                        {text}
                    </a>);  
            })}
        </div>
    </nav>
  )
}

export default Navbar
import close from '/close.webp'
import menu from '/lightMenu.webp'

export function HamburgerMenu(){
    return(
        <div className="fixed inset-0 bg-white flex flex-col items-center justify-start z-50 py-24">
            <img src={close} onClick={() => setMenuOpen(false)} className="absolute top-4 right-4 text-2xl w-5" />
            <nav className="flex flex-col space-y-4 text-lg">
              <a href="#home" className="hover:underline">Home</a>
              <a href="#about" className="hover:underline">About</a>
              <a href="#subscribe" className="hover:underline">Subscribe</a>
            </nav>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="hover:underline">Facebook</a>
              <a href="#" className="hover:underline">Twitter</a>
            </div>
        </div>
    )
}
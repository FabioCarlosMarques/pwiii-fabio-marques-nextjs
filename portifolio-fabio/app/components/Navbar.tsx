import Link from 'next/link';
import { FaWhatsapp, FaLinkedin, FaGithub, FaYoutube } from 'react-icons/fa';

export default function Navbar() {
    return (
        <nav className="bg-blue-600 text-white p-4 shadow">
          <div className="container mx-auto flex justify-between items-center">
           <ul className="flex gap-4">
             <li><Link href="#sobre">Sobre</Link></li>
             <li><Link href="#projetos">Projetos</Link></li> 
             <li><Link href="#contato">Contato</Link></li>
           </ul> 
           <div className="flex gap-4 text-xl">
            <a href="https://wa.me/5511979940093" target="_blank" rel="noopener noreferrer"><FaWhatsapp /></a>
            <a href="https://www.linkedin.com/in/fábio-carlos-marques-6297a3185" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
            <a href="https://www.github.com/Fábio @marques" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
            <a href="https://youtube.com/@07Fábio-g8o" target="_blank" rel="noopener noreferrer"><FaYoutube /></a>
         </div>
      </div>
    </nav>
  );
}

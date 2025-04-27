import { Link } from "wouter";
import { useConfig } from "@/lib/config-context";

const Footer = () => {
  const { config } = useConfig();
  const contactLinks = config?.contactLinks || {
    discord: "https://discord.magistica.fun",
    telegram: "https://tg.magistica.fun",
    email: "support@magistica.fun"
  };

  return (
    <footer className="bg-[#1E1E1E] border-t border-primary-dark/30 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Column 1 */}
          <div>
            <h3 className="text-xl font-playfair font-bold mb-6 magical-text">Магистика</h3>
            <p className="opacity-80 mb-6 font-montserrat leading-relaxed">
              Откройте для себя мир магии, тайн и увлекательных приключений в уникальной вселенной Магистики.
            </p>
            <div className="flex space-x-4">
              <a href={contactLinks.discord} className="text-light-gray hover:text-primary-light transition duration-300" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-discord text-xl"></i>
              </a>
              <a href={contactLinks.telegram} className="text-light-gray hover:text-primary-light transition duration-300" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-telegram-plane text-xl"></i>
              </a>
              <a href="#" className="text-light-gray hover:text-primary-light transition duration-300">
                <i className="fab fa-youtube text-xl"></i>
              </a>
              <a href="#" className="text-light-gray hover:text-primary-light transition duration-300">
                <i className="fab fa-instagram text-xl"></i>
              </a>
            </div>
          </div>
          
          {/* Column 2 */}
          <div>
            <h3 className="text-lg font-playfair font-bold mb-6 text-light">Навигация</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/">
                  <span className="text-light-gray hover:text-primary-light transition duration-300 cursor-pointer">О нас</span>
                </Link>
              </li>
              <li>
                <Link href="/rules">
                  <span className="text-light-gray hover:text-primary-light transition duration-300 cursor-pointer">Правила</span>
                </Link>
              </li>
              <li>
                <Link href="/support">
                  <span className="text-light-gray hover:text-primary-light transition duration-300 cursor-pointer">Поддержка</span>
                </Link>
              </li>
              <li>
                <a href="#" className="text-light-gray hover:text-primary-light transition duration-300">Новости</a>
              </li>
              <li>
                <a href="#" className="text-light-gray hover:text-primary-light transition duration-300">Магазин</a>
              </li>
            </ul>
          </div>
          
          {/* Column 3 */}
          <div>
            <h3 className="text-lg font-playfair font-bold mb-6 text-light">Ресурсы</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-light-gray hover:text-primary-light transition duration-300">Руководство новичка</a></li>
              <li><a href="#" className="text-light-gray hover:text-primary-light transition duration-300">База знаний</a></li>
              <li><a href="#" className="text-light-gray hover:text-primary-light transition duration-300">Карта мира</a></li>
              <li><a href="#" className="text-light-gray hover:text-primary-light transition duration-300">Школы магии</a></li>
              <li><a href="#" className="text-light-gray hover:text-primary-light transition duration-300">Журнал приключений</a></li>
            </ul>
          </div>
          
          {/* Column 4 */}
          <div>
            <h3 className="text-lg font-playfair font-bold mb-6 text-light">Контакты</h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <i className="fas fa-envelope text-primary-light mr-3"></i>
                <a href={`mailto:${contactLinks.email}`} className="text-light-gray hover:text-primary-light transition duration-300">
                  {contactLinks.email}
                </a>
              </li>
              <li className="flex items-center">
                <i className="fab fa-discord text-primary-light mr-3"></i>
                <a href={contactLinks.discord} className="text-light-gray hover:text-primary-light transition duration-300" target="_blank" rel="noopener noreferrer">
                  discord.magistica.fun
                </a>
              </li>
              <li className="flex items-center">
                <i className="fab fa-telegram-plane text-primary-light mr-3"></i>
                <a href={contactLinks.telegram} className="text-light-gray hover:text-primary-light transition duration-300" target="_blank" rel="noopener noreferrer">
                  tg.magistica.fun
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-primary-dark/30 text-center">
          <p className="text-light-gray opacity-60 text-sm">
            &copy; {new Date().getFullYear()} Магистика. Все права защищены.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

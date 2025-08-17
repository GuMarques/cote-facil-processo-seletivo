export const Footer = () => {
  return (
    <footer className="mt-16 pt-8 pb-4 border-t border-gray-200 ">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-center md:text-left">
            <p className="text-sm text-gray-600">
              Feito com{" "}
              <a
                href="https://unsplash.com"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-indigo-600 hover:text-indigo-800 transition-colors"
              >
                Unsplash API
              </a>
            </p>
            <p className="text-xs text-gray-500 mt-1">
              Fotos lindas e gratuitas da comunidade de fotógrafos mais generosa
              do mundo.
            </p>
          </div>
          <div className="flex items-center gap-6 text-xs text-gray-500">
            <a
              href="https://unsplash.com/license"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-700 transition-colors"
            >
              Licença
            </a>
            <a
              href="https://unsplash.com/terms"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-700 transition-colors"
            >
              Termos de Uso
            </a>
            <a
              href="https://unsplash.com/privacy"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-700 transition-colors"
            >
              Política de Privacidade
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

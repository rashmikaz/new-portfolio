const Footer = () => {
    return (
      <footer className="text-white-800 text-sm text-center border-t py-10 border-neutral-700 ">
        <p className="mb-3">&copy; {new Date().getFullYear()} Rashmikas</p>
        <nav className="flex justify-center space-x-6">
          <a href="/about" className="hover:underline ml-25 mr-25 mb-8">about</a>
          <a href="/learn" className="hover:underline ml-25 mr-25">learn</a>
          <a href="/portfolio" className="hover:underline ml-25 mr-25">portfolio</a>
          <a href="/blog" className="hover:underline ml-25 mr-25">blog</a>
          <a href="/contact" className="hover:underline ml-25 mr-25">contact</a>
        </nav>
      </footer>
    );
  };
  
  export default Footer;
  
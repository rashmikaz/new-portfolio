const Footer = () => {
    return (
      <footer className="text-white-800 text-sm text-center border-t py-10 border-neutral-700 mt-10">
        <p className="mb-3">&copy; {new Date().getFullYear()} Rashmikas</p>
        <nav className="flex justify-center space-x-6">
          <a href="/about" className="hover:underline ml-25 mr-25 mb-8">about</a>
          <a href="/" className="hover:underline ml-25 mr-25">home</a>
          <a href="/project" className="hover:underline ml-25 mr-25">project</a>
          <a href="/blog" className="hover:underline ml-25 mr-25">blog</a>
          <a href="/contact" className="hover:underline ml-25 mr-25">contact</a>
        </nav>
      </footer>
    );
  };
  
  export default Footer;
  
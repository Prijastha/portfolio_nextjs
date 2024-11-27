const Footer = () => {
  return (
    <footer className="  dark:text-gray-300 py-4">
      <div className="container mx-auto px-6 text-center">
        &copy; {new Date().getFullYear()} PrijaShrestha. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;

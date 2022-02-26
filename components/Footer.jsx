const date = new Date();

const Footer = () => {
  return (
    <>
      <hr className="border-t-3 border-white" />
      <footer className="py-6 text-center text-white text-xl">
        &copy;{`${date.getFullYear()} Akhi-Media`}
      </footer>
    </>
  );
};

export default Footer;

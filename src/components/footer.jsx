const Footer = () => {
  return (
    <footer className="bg-green-primary text-white bottom-0 left-0 right-0">
      <div className="container mx-auto flex items-center justify-center px-4 py-2">
        <img src="/image/logo-footer.png" width={40} alt="Logo" />
        <div className="text-white text-sm font-bold text-center pl-3">
          {/* <span className="pr-3">Logo</span> */}
          <span>&copy;2023 Dinas Pertanian Kabupaten Ngawi</span>
        </div>
      </div>
    </footer>
  );
};
export default Footer;

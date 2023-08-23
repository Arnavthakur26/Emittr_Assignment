export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8 rounded-lg">
      <div className="container mx-auto flex flex-wrap justify-between">
        <div className="w-full sm:w-1/2 md:w-1/4 mb-4">
          <h5 className="font-bold uppercase mb-2">Resources</h5>
          <ul className="list-none">
            <li>
              <a href="#">Help Center</a>
            </li>
            <li>
              <a href="#">Contact Us</a>
            </li>
            <li>
              <a href="#">FAQs</a>
            </li>
          </ul>
        </div>

        <div className="w-full sm:w-1/2 md:w-1/4 mb-4">
          <h5 className="font-bold uppercase mb-2">Company</h5>
          <ul className="list-none">
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
            <li>
              <a href="#">Careers</a>
            </li>
          </ul>
        </div>

        {/* Other footer links */}
      </div>

      <div className="border-t border-gray-800 py-4">
        <p className="text-center text-sm">
          &copy; {new Date().getFullYear()} LanguageLearner
        </p>
      </div>
    </footer>
  );
}

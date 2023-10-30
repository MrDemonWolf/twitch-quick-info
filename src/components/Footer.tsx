export default function Footer() {
  const copyrightYear = new Date().getFullYear();
  return (
    <>
      <footer className=" text-gray-900 dark:text-gray-200">
        <div className="container mx-auto flex flex-col items-center px-5 py-5 sm:flex-row">
          <p className="text-center md:text-right">
            © {copyrightYear}
            <a
              href="https://www.mrdemonwolf.com"
              className="ml-1 text-gray-900 dark:text-gray-200"
              rel="noopener noreferrer"
              target="_blank"
            >
              MrDemonWolf, Inc.
            </a>
          </p>
          <span className="mt-4 inline-flex justify-center text-sm sm:ml-auto sm:mt-0 sm:justify-start">
            this site is not affiliated with Twitch™ or any of it&rsquo;s
            partners.
          </span>
        </div>
      </footer>
    </>
  );
}

import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div>
      <footer className="footer footer-center text-base-content rounded p-10 dark:bg-slate-950 dark:text-white">
        <nav className="grid grid-flow-col gap-4">
          <Link to="/about" className="link link-hover">About us</Link>
          <Link to="/contact" className="link link-hover">Contact</Link>
        </nav>
        <nav>
          <div className="grid grid-flow-col gap-4">
            <a href="https://x.com/Dhruvjain_tweet?t=sll6dlg83k4Ue3VafZsoPg&s=08" target="_blank" rel="noopener noreferrer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current">
                <path
                  d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"
                  fill="#1DA1F2"></path>
              </svg>
            </a>

            <a href="https://www.linkedin.com/in/dhruv-jain-714434255?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current">
                <path
                  d="M22.23 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.72V1.72C24 .77 23.21 0 22.23 0zM7.09 20.44H3.56V9h3.53v11.44zM5.32 7.6a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zM20.44 20.44h-3.53v-5.86c0-1.4-.03-3.2-1.95-3.2-1.95 0-2.25 1.52-2.25 3.1v5.96h-3.53V9h3.39v1.56h.05c.47-.89 1.63-1.84 3.35-1.84 3.58 0 4.24 2.36 4.24 5.44v6.28z"
                  fill="#0077B5"  // LinkedIn blue color
                ></path>
              </svg>

            </a>
            {/* GitHub Icon */}
            <a href="https://github.com/dhruvjain-github" target="_blank" rel="noopener noreferrer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current">
                <path
                  d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.387.6.113.82-.263.82-.583 0-.29-.01-1.06-.015-2.08-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.334-1.755-1.334-1.755-1.09-.744.083-.73.083-.73 1.203.085 1.836 1.235 1.836 1.235 1.07 1.834 2.805 1.305 3.492.998.108-.774.418-1.305.762-1.605-2.665-.305-5.467-1.335-5.467-5.933 0-1.31.47-2.383 1.235-3.223-.123-.305-.535-1.533.118-3.195 0 0 1.008-.322 3.305 1.23.957-.266 1.983-.398 3.005-.403 1.022.005 2.048.137 3.006.403 2.294-1.552 3.3-1.23 3.3-1.23.656 1.662.244 2.89.12 3.195.77.84 1.234 1.913 1.234 3.223 0 4.61-2.807 5.625-5.478 5.922.43.37.816 1.103.816 2.22 0 1.604-.014 2.896-.014 3.287 0 .322.217.699.825.58C20.565 21.8 24 17.3 24 12c0-6.63-5.37-12-12-12z"
                  fill="#181717"></path>
              </svg>
            </a>
          </div>
        </nav>
        <aside>
          <p>Copyright © {new Date().getFullYear()} - All right reserved by Bookstore Industries Ltd</p>
        </aside>
      </footer>
    </div>
  );
}

export default Footer;

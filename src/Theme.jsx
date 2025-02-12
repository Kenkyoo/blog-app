import { themeChange } from 'theme-change'

import { useEffect } from 'react';

const Theme = () => {
    useEffect(() => {
        themeChange(false); // false para desactivar la inicialización automática al renderizar
    }, []);

    return (
    <div className="dropdown" style={{float: 'right'}}>
        <div tabIndex={0} role="button" className="btn m-1 bg-accent text-primary-content">
          Theme
          <svg
            width="12px"
            height="12px"
            className="inline-block h-2 w-2 fill-current opacity-60"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 2048 2048">
            <path d="M1799 349l242 241-1017 1017L7 590l242-241 775 775 775-775z"></path>
          </svg>
        </div>
        <ul tabIndex={0} className="dropdown-content bg-base-300 rounded-box z-[1] w-52 p-2 shadow-2xl">
          <li>
            <input
              type="radio"
              name="theme-dropdown"
              className="theme-controller btn btn-sm btn-block btn-ghost justify-start"
              aria-label="Default"
              value="default" 
              data-set-theme="luxury"
            />
          </li>
          <li>
            <input
              type="radio"
              name="theme-dropdown"
              className="theme-controller btn btn-sm btn-block btn-ghost justify-start"
              aria-label="Light"
              value="light" 
              data-set-theme="light"
            />
          </li>
          <li>
            <input
              type="radio"
              name="theme-dropdown"
              className="theme-controller btn btn-sm btn-block btn-ghost justify-start"
              aria-label="Dark"
              value="dark" 
              data-set-theme="dark"
            />
          </li>
          <li>
            <input
              type="radio"
              name="theme-dropdown"
              className="theme-controller btn btn-sm btn-block btn-ghost justify-start"
              aria-label="Cupcake"
              value="cupcake" 
              data-set-theme="cupcake"
            />
          </li>
          <li>
            <input
              type="radio"
              name="theme-dropdown"
              className="theme-controller btn btn-sm btn-block btn-ghost justify-start"
              aria-label="Aqua"
              value="aqua" />
          </li>
            <li>
            <input
              type="radio"
              name="theme-dropdown"
              className="theme-controller btn btn-sm btn-block btn-ghost justify-start"
              aria-label="Luxury"
              value="luxury" 
              data-set-theme="luxury"
            />
            </li>
            <li>
            <input
              type="radio"
              name="theme-dropdown"
              className="theme-controller btn btn-sm btn-block btn-ghost justify-start"
              aria-label="Dracula"
              value="dracula" 
              data-set-theme="dracula"
            />
            </li>
            <li>
            <input
              type="radio"
              name="theme-dropdown"
              className="theme-controller btn btn-sm btn-block btn-ghost justify-start"
              aria-label="Night"
              value="night" 
              data-set-theme="night"
            />
            </li>
            <li>
            <input
              type="radio"
              name="theme-dropdown"
              className="theme-controller btn btn-sm btn-block btn-ghost justify-start"
              aria-label="Acid"
              value="acid" 
              data-set-theme="acid"
            />
            </li>
            <li>
            <input
              type="radio"
              name="theme-dropdown"
              className="theme-controller btn btn-sm btn-block btn-ghost justify-start"
              aria-label="Dim"
              value="dim" 
              data-set-theme="dim"
            />
            </li>
            <li>
            <input
              type="radio"
              name="theme-dropdown"
              className="theme-controller btn btn-sm btn-block btn-ghost justify-start"
              aria-label="Nord"
              value="nord" 
              data-set-theme="nord"
            />
            </li>
            <li>
            <input
              type="radio"
              name="theme-dropdown"
              className="theme-controller btn btn-sm btn-block btn-ghost justify-start"
              aria-label="Sunset"
              value="sunset" 
              data-set-theme="sunset"
            />
            </li>
            <li>
            <input
              type="radio"
              name="theme-dropdown"
              className="theme-controller btn btn-sm btn-block btn-ghost justify-start"
              aria-label="Fantasy"
              value="fantasy" 
              data-set-theme="fantasy"
            />
            </li>
            <li>
            <input
              type="radio"
              name="theme-dropdown"
              className="theme-controller btn btn-sm btn-block btn-ghost justify-start"
              aria-label="Synthwave"
              value="synthwave" 
              data-set-theme="synthwave"
            />
            </li>
        </ul>
      </div>
    );
};

export default Theme;
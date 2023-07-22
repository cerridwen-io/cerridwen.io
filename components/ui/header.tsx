// import Link from "next/link";
import MobileMenu from './mobile-menu'

export default function Header() {
  return (
    <header className="absolute w-full z-30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-200">
          {/* Site branding */}
          <div className="shrink-0 mr-4">
            {/* Logo */}
            <a href="/" className="block" aria-label="Cruip">
              {
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  version="1.1"
                  width="750"
                  height="100"
                  viewBox="325 -10 100 100"
                >
                  <g transform="scale(1) translate(10, 10)">
                    <defs id="cerridwen-logo"></defs>
                    {/* logo */}
                    <g
                      id="SvgjsG1059"
                      transform="matrix(1.4631270170211792,0,0,1.4631270170211792,-35.10986803038076,-35.115047557048825)"
                      fill="#2fedef"
                    >
                      <path
                        xmlns="http://www.w3.org/2000/svg"
                        d="M72.55,37.06A4,4,0,1,0,70,38a3.65,3.65,0,0,0,.74-.08A24,24,0,1,1,50,26a1,1,0,0,0,0-2A26,26,0,1,0,72.55,37.06ZM68,34a2,2,0,1,1,2,2A2,2,0,0,1,68,34Z"
                      ></path>
                    </g>
                    {/* Company name */}
                    <g
                      id="cerridwen-name"
                      transform="matrix(1.1222633123397827,0,0,1.1222633123397827,94.29416137682358,8.802182001866361)"
                      fill="#fcfefe"
                    >
                      <path d="M27.56 33.76 c-0.2 0.4 -0.6 1.2 -1.36 2.12 c-2.8 3.36 -7.36 4.96 -11.64 4.96 c-1 0 -3.92 -0.12 -6.68 -1.36 c-0.68 -0.32 -1.44 -0.8 -2.04 -1.2 c-1.44 -1.04 -4.32 -3.6 -4.32 -8.4 c0 -0.88 0.08 -3.08 1.32 -5.2 c2.32 -4.08 7.64 -5.76 12.04 -5.76 c1.32 0 6.76 0.2 10.28 3.68 c0.92 0.88 1.44 1.68 2 2.84 l-6.88 0.72 c-0.08 -0.08 -0.32 -0.4 -0.64 -0.72 c-0.76 -0.68 -2.24 -1.56 -4.76 -1.56 c-0.48 0 -1.36 0.04 -2.56 0.44 c-2.44 0.84 -4.12 2.88 -4.12 5.52 c0 0.4 0.08 1.4 0.52 2.4 c0.64 1.44 2.28 3.6 6.12 3.6 c0.6 0 3.12 -0.12 4.84 -1.56 c0.4 -0.32 0.72 -0.6 1.16 -1.48 z M57.784 33.92 c-0.28 0.48 -0.6 0.96 -0.92 1.4 c-1.04 1.36 -2.8 2.84 -4.36 3.64 c-1.4 0.72 -4.28 1.84 -8.32 1.84 c-10.6 0 -13.48 -6.44 -13.48 -11.12 c0 -1.68 0.32 -5.28 3.8 -7.92 c3.6 -2.76 8.48 -2.8 9.76 -2.8 c5 0 10.44 1.88 12.48 6.92 c0.48 1.24 0.76 2.4 0.8 5.12 l-20.08 0 c0.16 0.8 0.36 1.28 0.48 1.56 c0.72 1.56 2.64 3.48 6.6 3.48 c1.8 0 3.88 -0.44 5.32 -1.6 c0.6 -0.52 0.92 -0.96 1.08 -1.2 z M50.263999999999996 27.36 c-0.04 -0.16 -0.2 -1 -0.56 -1.56 c-1.12 -1.68 -3.76 -2.2 -5.56 -2.2 c-1.92 0 -4.2 0.52 -5.48 2 c-0.48 0.56 -0.72 1.12 -1 1.76 l12.6 0 z M78.408 25.04 c-0.6 -0.04 -1.16 -0.08 -1.76 -0.08 c-1.68 0 -3.92 0.28 -5.32 1.48 c-0.52 0.44 -0.88 1.04 -0.96 1.24 c-0.4 0.8 -0.48 1.64 -0.48 2.56 l0 9.76 l-6.64 0 l0 -20.24 l6.64 0 l0 3.44 c0.24 -0.36 0.6 -0.88 0.84 -1.16 c2.48 -2.96 6.72 -2.92 7.68 -2.96 l0 5.96 z M97.83200000000001 25.04 c-0.6 -0.04 -1.16 -0.08 -1.76 -0.08 c-1.68 0 -3.92 0.28 -5.32 1.48 c-0.52 0.44 -0.88 1.04 -0.96 1.24 c-0.4 0.8 -0.48 1.64 -0.48 2.56 l0 9.76 l-6.64 0 l0 -20.24 l6.64 0 l0 3.44 c0.24 -0.36 0.6 -0.88 0.84 -1.16 c2.48 -2.96 6.72 -2.92 7.68 -2.96 l0 5.96 z M108.69600000000001 17.2 l-6.56 0 l0 -4.48 l6.56 0 l0 4.48 z M108.69600000000001 40 l-6.56 0 l0 -20.24 l6.56 0 l0 20.24 z M139.84 40 l-6.48 0 l0 -2.44 c-0.76 0.72 -1.08 1 -1.48 1.28 c-1 0.72 -3.28 1.88 -6.56 1.88 c-2.84 0 -5.88 -1 -7.96 -3 c-1.12 -1.08 -3 -3.6 -3 -7.68 c0 -0.8 0.08 -2.68 0.92 -4.68 c1.76 -4.04 5.72 -6.24 10.04 -6.24 c1.04 0 3.88 0.2 6.56 1.72 c0.72 0.44 1.24 0.88 1.48 1.04 l0 -10.12 l6.48 0 l0 28.24 z M133.48000000000002 29.8 c0 -0.36 -0.04 -2 -0.76 -3.24 c-1.16 -2 -3.84 -2.84 -6 -2.72 c-1.36 0.08 -2.2 0.44 -2.68 0.72 c-1.96 1.08 -2.88 3.12 -2.88 5.28 c0 1.24 0.32 2.28 0.44 2.68 c0.52 1.4 1.84 3.76 5.64 3.72 c2.92 0 4.52 -1.48 5.2 -2.44 c0.44 -0.68 1.04 -2 1.04 -4 z M185.344 19.76 l-8.76 20.24 l-6.96 0 l-5.12 -14.16 l-5.04 14.16 l-7 0 l-8.6 -20.24 l7.12 0 l5 13.32 l4.96 -13.32 l7.16 0 l5 13.32 l5.04 -13.32 l7.2 0 z M215.248 33.92 c-0.28 0.48 -0.6 0.96 -0.92 1.4 c-1.04 1.36 -2.8 2.84 -4.36 3.64 c-1.4 0.72 -4.28 1.84 -8.32 1.84 c-10.6 0 -13.48 -6.44 -13.48 -11.12 c0 -1.68 0.32 -5.28 3.8 -7.92 c3.6 -2.76 8.48 -2.8 9.76 -2.8 c5 0 10.44 1.88 12.48 6.92 c0.48 1.24 0.76 2.4 0.8 5.12 l-20.08 0 c0.16 0.8 0.36 1.28 0.48 1.56 c0.72 1.56 2.64 3.48 6.6 3.48 c1.8 0 3.88 -0.44 5.32 -1.6 c0.6 -0.52 0.92 -0.96 1.08 -1.2 z M207.72799999999998 27.36 c-0.04 -0.16 -0.2 -1 -0.56 -1.56 c-1.12 -1.68 -3.76 -2.2 -5.56 -2.2 c-1.92 0 -4.2 0.52 -5.48 2 c-0.48 0.56 -0.72 1.12 -1 1.76 l12.6 0 z M245.59199999999998 40 l-6.6 0 l0 -10.32 c0 -1.72 -0.12 -3.36 -1.48 -4.56 c-0.72 -0.68 -1.88 -1.28 -4.16 -1.28 c-2.24 0 -4.96 0.64 -5.84 3.08 c-0.2 0.56 -0.28 1 -0.28 2.2 l0 10.88 l-6.52 0 l0 -20.24 l6.52 0 l0 2.88 c0.72 -0.72 1 -0.96 1.44 -1.32 c1.16 -0.88 3.68 -2.16 7.48 -2.16 c4 0 6.4 1.56 7.52 2.76 c0.6 0.64 1 1.32 1.28 2.12 c0.6 1.56 0.64 3.12 0.64 4.76 l0 11.2 z"></path>
                    </g>
                  </g>
                </svg>
              }
            </a>
          </div>
          <MobileMenu />
        </div>
      </div>
    </header>
  )
}

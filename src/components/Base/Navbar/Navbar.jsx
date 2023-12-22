import clsx from 'clsx'
import Image from 'next/image'
import { useRouter } from 'next/router'
import Link from 'next/link'

const listLinks = [
  {
    id: 1,
    name: 'Home',
    path: '/',
  },
  {
    id: 2,
    name: 'About',
    path: '/about',
  },
  {
    id: 3,
    name: 'Expertise',
    path: '#expertise',
  },
  {
    id: 4,
    name: 'Program',
    path: '#program',
  },
  {
    id: 5,
    name: 'Odyssey',
    path: '#odyssey',
  },
  {
    id: 6,
    name: 'News',
    path: '#news',
  },
  {
    id: 7,
    name: 'Contact',
    path: '#contact',
  },
  {
    id: 8,
    name: 'Career',
    path: '#career',
  },
]

export default function Navbar({ isDark = false }) {
  const router = useRouter()

  return (
    <nav
      className={clsx(
        'navbar py-3 navbar-expand-lg bg-transparent',
        isDark && 'navbar-dark'
      )}
    >
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <Image src="/img/logo.png" width="160" height="50" alt="" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarScroll"
          aria-controls="navbarScroll"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarScroll">
          <ul className="navbar-nav ms-auto my-2 my-lg-0 navbar-nav-scroll">
            {listLinks.map((link) => (
              <li className="nav-item" key={link.id}>
                <Link
                  className={clsx(
                    'nav-link',
                    (link.path === router.asPath ||
                      (link.name === 'Home' && router.asPath === '/#') ||
                      router.asPath.startsWith('/' + link.path)) &&
                      'active'
                  )}
                  aria-current="page"
                  href={link.path}
                >
                  <div className="d-flex flex-column justify-content-center text-center">
                    <div>{link.name}</div>
                    {(link.path === router.asPath ||
                      (link.name === 'Home' && router.asPath === '/#') ||
                      router.asPath.startsWith('/' + link.path)) && (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="6"
                        height="6"
                        viewBox="0 0 6 6"
                        fill="none"
                        className="mx-auto mt-1"
                      >
                        <circle cx="3" cy="3" r="3" fill="#B92322" />
                      </svg>
                    )}
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  )
}

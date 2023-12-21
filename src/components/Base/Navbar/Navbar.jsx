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

export default function Navbar() {
  const router = useRouter()

  return (
    <nav className="navbar py-3 navbar-expand-lg bg-transparent">
      <div className="container-fluid px-0">
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
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  )
}

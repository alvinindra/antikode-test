import clsx from 'clsx'
import styles from './HomeJumbotron.module.scss'
import Link from 'next/link'
import Image from 'next/image'
import Navbar from '@/components/Base/Navbar/Navbar'
import ICArrowNext from '@/icons/arrow/icon-next.svg'
import ICArrowDown from '@/icons/arrow/icon-down.svg'

export default function HomeJumbotron() {
  return (
    <div className={clsx('container-fluid', styles.bgJumbotron)}>
      <div className="container px-0">
        <Navbar />
      </div>
      <div className="container container-space">
        <div className="row">
          <div className="col-lg-5">
            <h1 className="text-white">
              Adopt Globally,
              <br /> Adopt Locally
            </h1>
            <p
              className="mb-5 text-desktop-body text-white80"
              style={{ maxWidth: '477px' }}
            >
              Daya Dimensi Indonesia is a world-class strategic partner for
              individual and organisational transformation through
              humanity-based and technology-supported solutions to help you
              hire, promote, and develop exceptional leaders.
            </p>
            <div className="d-flex">
              <Link href="/about" className="d-flex me-5 underline-animation">
                <p className="mb-0 me-2 text-desktop-link text-white">
                  LEARN MORE ABOUT US
                </p>
                <ICArrowNext className="my-auto" />
              </Link>
              <Link href="/" className="d-flex underline-animation">
                <p className="mb-0 me-2 text-desktop-link text-white">
                  CONTACT US
                </p>
                <ICArrowNext className="my-auto" />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="row g-0">
        <div className={clsx(styles.heroInfo, 'col-12 col-lg-7 d-flex')}>
          <div className="d-flex flex-column">
            <div className={styles.heroInfoDiscover}>Discover</div>
            <ICArrowDown />
          </div>
          <div className="container">
            <div className="row">
              <div className="col-lg-4">
                <div className={styles.heroInfoTitle}>24+ Years</div>
                <div className="text-desktop-body text-black40 text-nowrap">
                  Experience
                </div>
              </div>
              <div className="col-lg-4">
                <div className={styles.heroInfoTitle}>50.000+</div>
                <div className="text-desktop-body text-black40 text-nowrap">
                  Executive Clients
                </div>
              </div>
              <div className="col-lg-4">
                <div className={styles.heroInfoTitle}>400+</div>
                <div className="text-desktop-body text-black40 text-nowrap">
                  Organization Clients
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 col-lg-5 d-flex">
          <div className="d-flex my-auto flex-row py-4">
            <Image
              className="ms-4 me-32px w-100"
              src="/img/jumbotron/weps.png"
              alt="Proud to Support Women's Empowerment Principles"
              width={195}
              height={64}
            />
            <Image
              className="w-100"
              src="/img/jumbotron/iso.png"
              alt="Certified ISO"
              width={260}
              height={64}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

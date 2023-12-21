import clsx from 'clsx'
import styles from './HomeJumbotron.module.scss'
import Link from 'next/link'
import Image from 'next/image'
import Navbar from '@/components/Base/Navbar/Navbar'

export default function HomeJumbotron() {
  return (
    <div className={clsx('container-fluid', styles.bgJumbotron)}>
      <div className="container px-0">
        <Navbar />
      </div>
      <div className="container container-space">
        <div className="row">
          <div className="col-md-5">
            <h1 className="text-white">
              Adopt Globally,
              <br /> Adopt Locally
            </h1>
            <p
              className="mb-4 text-desktop-body text-white80"
              style={{ maxWidth: '477px' }}
            >
              Daya Dimensi Indonesia is a world-class strategic partner for
              individual and organisational transformation through
              humanity-based and technology-supported solutions to help you
              hire, promote, and develop exceptional leaders.
            </p>
            <div className="d-flex">
              <Link href={'/'} className="d-flex align-items-center">
                <p className="mb-0 me-2 text-white">LEARN MORE ABOUT US</p>
                <Image src={'arrow.svg'} alt="arrow" width={20} height={20} />
              </Link>
              <Link href={'/'} className="d-flex align-items-center">
                <p className="mb-0 me-2 text-white">CONTACT US</p>
                <Image src={'arrow.svg'} alt="arrow" width={20} height={20} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

import clsx from 'clsx'
import styles from './HomeCareer.module.scss'
import Link from 'next/link'
import ICArrowNext from '@/icons/arrow/icon-next.svg'

export default function HomeCareer() {
  return (
    <div className={clsx('container-fluid', styles.bgCareer, styles.space)}>
      <div className="container">
        <div className="row">
          <div className="col-lg-5">
            <h2 className="text-white">
              Be a Part of <br />
              Daya Dimensi Indonesia
            </h2>
            <p
              className="mb-5 text-desktop-body text-white80"
              style={{ maxWidth: '481px' }}
            >
              Are you the resilient leaders we are searching for? Join Daya
              Dimensi Indonesia to advance your leadership skill and generate
              exceptional leaders across Indonesia at once.
            </p>
            <div className="d-flex">
              <Link href="/about" className="d-flex me-5 underline-animation">
                <p className="mb-0 me-2 text-desktop-link text-white">
                  LEARN MORE
                </p>
                <ICArrowNext className="my-auto" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

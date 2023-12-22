import Link from 'next/link'
import styles from './Footer.module.scss'
import clsx from 'clsx'
import Image from 'next/image'

import ICFacebook from '@/icons/footer/facebook.svg'
import ICInstagram from '@/icons/footer/instagram.svg'
import ICLinkedin from '@/icons/footer/linkedin.svg'
import ICYoutube from '@/icons/footer/youtube.svg'
import ICTwitter from '@/icons/footer/twitter.svg'
import ICNext24 from '@/icons/arrow/icon-next24.svg'
import ICArrowUp from '@/icons/arrow/icon-up.svg'

const listSocialMedia = [
  {
    id: 1,
    link: 'https://facebook.com',
    icon: <ICFacebook />,
  },
  {
    id: 2,
    link: 'https://instagram.com',
    icon: <ICInstagram />,
  },
  {
    id: 3,
    link: 'https://linkedin.com',
    icon: <ICLinkedin />,
  },
  {
    id: 4,
    link: 'https://youtube.com',
    icon: <ICYoutube />,
  },
  {
    id: 5,
    link: 'https://twitter.com',
    icon: <ICTwitter />,
  },
]

export default function Footer() {
  return (
    <footer className={styles.container}>
      <div className="container-fluid border-bottom">
        <div className="container">
          <div className={clsx(styles.containerSpace, 'row position-relative')}>
            <Link className={styles.scrollToTop} href="#">
              <ICArrowUp className="m-auto" />
            </Link>
            <div className="col-lg-5">
              <div className="d-flex flex-lg-row flex-column flex-wrap gap-4">
                <Image
                  src="/img/certified.png"
                  width={35}
                  height={60}
                  alt="2023 GPTW - Certifictaion 1"
                />
                <Image
                  src="/img/jumbotron/weps.png"
                  width={152}
                  height={50}
                  alt="LOGO WEPS Proud_to_support"
                />
                <Image
                  src="/img/jumbotron/iso.png"
                  width={206}
                  height={50}
                  alt="10 ISO Certification 2"
                />
              </div>
            </div>
            <div className="col-lg-3 my-lg-0 my-4">
              <div className="d-flex gap-lg-3 gap-2">
                {listSocialMedia.map((socmed) => (
                  <Link href={socmed.link} key={socmed.id}>
                    {socmed.icon}
                  </Link>
                ))}
              </div>
            </div>
            <div className="col-lg-4">
              <div className="h4 mb-12px">Subscribe. Join the Community.</div>
              <div className="d-flex">
                <input
                  type="email"
                  className={styles.subscribe}
                  placeholder="Email address"
                />
                <div className={styles.subscribeBtn}>
                  <ICNext24 className="my-auto" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="d-flex flex-md-row flex-column py-4">
          <div className="text-desktop-body2">
            Copyright © 2022 Daya Dimensi Indonesia. Website crafted by
            Antikode.
          </div>
          <div className="d-flex ms-auto">
            <Link
              href="/"
              className="text-desktop-body2 text-white heading underline-animation"
            >
              Privacy Policy
            </Link>
            <div className={styles.divider}>|</div>
            <Link
              href="/"
              className="text-desktop-body2 text-white heading underline-animation"
            >
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

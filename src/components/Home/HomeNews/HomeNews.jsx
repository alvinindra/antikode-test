import clsx from 'clsx'
import styles from './HomeNews.module.scss'
import Link from 'next/link'
import ICNextArrowRed from '@/icons/arrow/icon-arrow-red.svg'
import Image from 'next/image'
import { useRouter } from 'next/router'

const listNews = [
  {
    id: 1,
    category: 'PUBLIC WORKSHOP',
    date: '25 Feb 2022',
    title: 'Zoompathy vs Zoom-fatigue: Managing Virtual Meeting Burnout',
  },
  {
    id: 2,
    category: 'BUKA PINTU',
    date: '20 Oct 2021',
    title: 'Our New Solution To Hire The Right Person For Your Company',
  },
  {
    id: 3,
    category: 'LIVE WEBINAR',
    date: '20 Oct 2021',
    title: 'DDI : Among Indonesia’s First Signatories of UN WEP',
  },
  {
    id: 4,
    category: 'BUKA PINTU',
    date: '20 Oct 2021',
    title: 'Our New Solution To Hire The Right Person For Your Company',
  },
]

export default function HomeNews() {
  const router = useRouter()

  return (
    <div
      className={clsx('container-fluid', styles.bgCareer, styles.space)}
      id="news"
    >
      <div className="container container-space">
        <div className="row">
          <div className={clsx(styles.spaceTitle, 'col-12')}>
            <div className="d-flex justify-content-between">
              <h2 className="fw-light mb-0">Upcoming Activities</h2>
              <Link href="/" className={styles.viewAll}>
                <div className="me-2">VIEW ALL</div>
                <ICNextArrowRed className="my-auto" />
              </Link>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-5">
            <Image
              src="/img/activities/activities.jpg"
              width={0}
              height={0}
              sizes="100vw"
              style={{
                width: '100%',
                height: 'auto',
                objectFit: 'cover',
              }}
              alt=""
            />
          </div>
          <div className="col-12 col-lg-7 border-top">
            {listNews?.map((newLink) => (
              <div
                className={styles.news}
                key={newLink.id}
                onClick={() => router.push('/')}
              >
                <div className={styles.newsSection}>
                  <div className="d-flex flex-column">
                    <div className="text-desktop-section text-nowrap">
                      {newLink.category}
                    </div>
                    <div className="text-desktop-caption">{newLink.date}</div>
                  </div>
                </div>
                <div className={styles.newsTitle}>{newLink.title}</div>
                <Link href="/" className="ms-auto">
                  <ICNextArrowRed className="mb-auto" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

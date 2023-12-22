import Image from 'next/image'
import ICLearning from '@/icons/expertise/learning.svg'
import ICExecutive from '@/icons/expertise/executive.svg'
import ICDiagnostic from '@/icons/expertise/diagnostic.svg'
import ICKlobility from '@/icons/expertise//klobility.svg'
import ICTransformation from '@/icons/expertise/transformation.svg'
import ICNext from '@/icons/arrow/icon-next40.svg'
import styles from './HomeExpertise.module.scss'
import Link from 'next/link'

const listExpertise = [
  {
    id: 1,
    icon: <ICLearning />,
    title: 'Applied Science & Imagination Centre',
    img: '/img/expertise/meeting.jpg',
  },
  {
    id: 2,
    icon: <ICDiagnostic />,
    title: 'Diagnostics and Assessments',
    img: '/img/expertise/meeting.jpg',
  },
  {
    id: 3,
    icon: <ICTransformation />,
    title: 'Human Resources & Organizational Transformation',
    img: '/img/expertise/meeting.jpg',
  },
  {
    id: 4,
    icon: <ICKlobility />,
    title: 'Klobility',
    img: '/img/expertise/meeting.jpg',
  },
  {
    id: 5,
    icon: <ICExecutive />,
    title: 'Leadership Development',
    img: '/img/expertise/meeting.jpg',
  },
  {
    id: 6,
    icon: <ICLearning />,
    title: 'On-Demand Online Learning',
    img: '/img/expertise/meeting.jpg',
  },
]

export default function HomeExpertise() {
  return (
    <div className="container-fluid bg-gray">
      <div className="container container-space">
        <div className="row">
          <div className="col-12 col-lg-8 mb-56px">
            <h2>Expertise</h2>
            <div className="text-desktop-body text-dark-gray">
              {`"Organisations who will succeed in the long-run are those who are open
        to new ideas, embrace innovations, instill compassion in every act and
        decision, and consistent in advancing humanity through sustainability."
        - Excerpts from 'Leaders of a New Planet' book.`}
            </div>
          </div>
        </div>
        <div className="row row-cols-1 row-cols-lg-3 g-32px">
          {listExpertise.map((expertise) => (
            <div className="col mb-32px" key={expertise.id}>
              <Link className={styles.expertise} href="/">
                <div className={styles.expertiseBgImage}>
                  {expertise.id !== 2 && (
                    <div className={styles.expertiseBgRed}>
                      <Image
                        src="/img/expertise/mask-red.png"
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
                  )}
                  <div className={styles.expertiseBgOverlay}></div>
                  <Image
                    src={expertise.img}
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{
                      width: '100%',
                      height: 'auto',
                      objectFit: 'cover',
                    }}
                    alt={expertise.title}
                  />
                </div>
                <div className={styles.expertiseContent}>
                  {expertise.icon}
                  <h3 className={styles.expertiseContentTitle}>
                    {expertise.title}
                  </h3>
                </div>
                <ICNext className={styles.iconNext} />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

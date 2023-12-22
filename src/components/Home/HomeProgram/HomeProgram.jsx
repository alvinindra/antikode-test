import clsx from 'clsx'
import styles from './HomeProgram.module.scss'
import Image from 'next/image'

export default function HomeProgram() {
  return (
    <div
      className={clsx(styles.bgProgram, 'container-fluid bg-gray')}
      id="program"
    >
      <div className="container-fluid container-space position-relative">
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-5 d-none d-lg-block">
              <Image
                src="/img/program/program1.png"
                className="w-100"
                width={584}
                height={438}
                style={{ objectFit: 'cover' }}
                alt="Program 1"
              />
            </div>
            <div className="col-12 col-lg-6 my-auto">
              <Image
                src="/img/program/kemendikbud.png"
                className="mb-3"
                width={98}
                height={71.191}
                alt="Program 1"
              />
              <div className={styles.programTitle}>
                {`"Kolaborasi dalam Program Guru Penggerak sangat meaningful dan
                  impactful untuk perkembangan pendidikan di Indonesia, sehingga
                  perlu untuk dilakukan secara berkelanjutan."`}
              </div>
              <div className="h6 text-white">
                Kementerian Pendidikan, Budaya, Riset, dan Teknologi
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

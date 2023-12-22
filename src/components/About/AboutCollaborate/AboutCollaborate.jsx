import Image from 'next/image'

export default function AboutCollaborate() {
  return (
    <div className="container-fluid container-space bg-gray">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h2>Reasons to Collaborate</h2>
          </div>
        </div>
        <div className="row container-space pb-0">
          <div className="col-12 col-lg-4 border-top pt-4">
            <Image
              src="/img/about/icon-learning.svg"
              alt=""
              className="mb-4"
              width={64}
              height={64}
            />
            <div className="h3 mb-2">Ethical</div>
            <div className="text-desktop-body">
              {`We maintain the confidentiality of our clients' data. We uphold
              our integrity by practicing zero-tolerance policy for bribery.`}
            </div>
          </div>
          <div className="col-12 col-lg-4 border-top pt-4">
            <Image
              src="/img/about/icon-skills.svg"
              alt=""
              className="mb-4"
              width={64}
              height={64}
            />
            <div className="h3 mb-2">Reliable</div>
            <div className="text-desktop-body">
              {`We strive to provide solutions that are supported by data and technology.`}
            </div>
          </div>
          <div className="col-12 col-lg-4 border-top pt-4">
            <Image
              src="/img/about/icon-compassion.svg"
              alt=""
              className="mb-4"
              width={64}
              height={64}
            />
            <div className="h3 mb-2">Agile</div>
            <div className="text-desktop-body">
              {`We listen to our clients deliberately and deliver bespoke solutions to achieve excellent outcome.`}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

import Image from 'next/image'

export default function AboutOurClients() {
  return (
    <div className="container-fluid container-space bg-darkgray2">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h2 className="text-white">Our Clients</h2>
          </div>
        </div>
        <div className="d-flex flex-wrap gap-24px">
          <Image
            src={'/img/about/client/astrainternational.png'}
            alt="astrainternational"
            width={173}
            height={173}
          />
          <Image
            src={'/img/about/client/blibli.png'}
            alt="blibli"
            width={173}
            height={173}
          />
          <Image
            src={'/img/about/client/bri.png'}
            alt="bri"
            width={173}
            height={173}
          />
          <Image
            src={'/img/about/client/ifg.png'}
            alt="ifg"
            width={173}
            height={173}
          />
          <Image
            src={'/img/about/client/kalbefarma.png'}
            alt="astra"
            width={173}
            height={173}
          />
          <Image
            src={'/img/about/client/kemdikbud.png'}
            alt="kemdikbud"
            width={173}
            height={173}
          />
          <Image
            src={'/img/about/client/mandiri.png'}
            alt="mandiri"
            width={173}
            height={173}
          />
          <Image
            src={'/img/about/client/mindid.png'}
            alt="mindid"
            width={173}
            height={173}
          />
          <Image
            src={'/img/about/client/pertamina.png'}
            alt="pertamina"
            width={173}
            height={173}
          />
          <Image
            src={'/img/about/client/pln.png'}
            alt="pln"
            width={173}
            height={173}
          />
        </div>
      </div>
    </div>
  )
}

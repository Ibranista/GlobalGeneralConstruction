import Image from 'next/image'
import styles from '@/app/ui/home.module.css';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between py-24 relative top-20 ">
      
      {/* about our foundation */}
      <section className=' text-white px-5'>
        <h1 className='font-semibold
        text-4xl py-5
        '>GL<span><Image
            src='/globe.png'
            alt="logo"
            width={50}
            height={10}
            style={{ display: 'inline-block' }}
          /></span>bal General Construction</h1>
        <p className='
        text-justify
        '>
          Since our inception in 2016, GLOBAL has been focused Offering a
          comprehensive range of construction services enables us to tailor a delivery
          system which matches our clients&apos; needs, goals and budget. Our commitment
          to these services adds value to your project and helps ensure its success.
          The company is established by professional who has demonstrated excellent
          performance in academics and research, consultancy and construction of
          civil works.
          The Company will offers full service of General Contractor and any kind of Building,
          Water works . Company will perform work on both a negotiated and a competitive
          bid basis.
          As a local company we ought to meet the necessity of the country for the benefit
          of all.
        </p>
      </section>
    
    </main>
  )
}

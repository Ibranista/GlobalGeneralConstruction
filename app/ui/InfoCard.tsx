import Image from "next/image";

export default function InfoCard({ title, content, image }: {
    title: string,
    content: string,
    image: string
}) {
    return (
        <section className=" bg-slate-50 px-4 py-5">
            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="6" viewBox="0 0 50 6" fill="none">
                <path d="M0 3H50" stroke="url(#paint0_linear_0_185)" stroke-width="5" />
                <defs>
                    <linearGradient id="paint0_linear_0_185" x1="0" y1="3" x2="50" y2="3" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#FEDB03" />
                        <stop offset="1" stop-color="#FEA903" />
                    </linearGradient>
                </defs>
            </svg>
            <h1 className='font-semibold
        text-4xl py-5
        '>{title}</h1>
            <div className='text-justify flex flex-col gap-0'>
                <p className='text-darkBlue m-0 p-0  text-[100px] -mb-10'>
                    ”
                </p>
                <div>
                    <Image
                        className='float-right pl-3 '
                        src={image}
                        alt="logo"
                        width={150}
                        height={150}
                    />
                    {/* mission text */}
                    <p>
                        {content}
                    </p>
                </div>
            </div>
            <div>

            </div>
        </section>
    )
}
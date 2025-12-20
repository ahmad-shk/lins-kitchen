
type BannerProps = {
    image: string
    title: string
}

const InnerBanner = ({image,title}: BannerProps) => {
  return (
    <div className="w-full min-h-[200px] md:min-h-[375px] overflow-hidden relative bg-cover bg-center py-7 flex items-center justify-center" style={{ backgroundImage: `url(${image})` }}>
        <div className='absolute left-0 top-0 w-full h-full' style={{background: "radial-gradient(78.38% 71.01% at 50% 50%, rgba(15, 28, 42, 0.5) 0%, #0F1C2A 100%)"}}></div>
        <div className='container-sm relative'>
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-playfair text-btnSecondary text-center leading-none uppercase">{title}</h1>
        </div>
    </div>
  )
}

export default InnerBanner
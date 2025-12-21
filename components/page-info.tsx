import { Badge } from "./ui/badge"

type BannerProps = {
  badge: string
  title: string
  description: string
}

const PageInfo = ({badge,title,description}: BannerProps) => {
  return (
    <div className="py-16">
      <div className='container-sm relative text-center'>
        <div className="max-w-[880px] mx-auto">
          <Badge className="border-[.5px] border-navyBlue text-navyBlue rounded-full bg-transparent font-inter text-base md:text-xl px-6 py-1.5 font-normal mb-6">
            {badge}
          </Badge>
          <h2 className="text-navyBlue text-3xl md:text-4xl lg:text-5xl font-semibold font-playfair leading-none uppercase mb-6">{title}</h2>
          <p className="text-lg md:text-2xl text-black font-inter font-normal leading-snug">{description}</p>
        </div>
      </div>
    </div>
  )
}

export default PageInfo
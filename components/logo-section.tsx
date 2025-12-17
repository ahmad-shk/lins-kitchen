import Image from "next/image";

export function LogoSection() {
  return (
    <div className="bg-[#F3F3F4] py-16 border-b border-navyBlue">
      <div className="container-sm">
        <Image src="/images/home-page/footer-logo.svg" alt="footer logo" width={192} height={124} className="table mx-auto" />
      </div>
    </div>
  )
}

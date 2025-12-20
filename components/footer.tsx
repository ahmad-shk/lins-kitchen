"use client"

import Image from "next/image"
import { useLanguage } from "@/contexts/language-context"

export function Footer() {
  const { t } = useLanguage()

  return (
    <>
      <footer className="bg-gray-200 text-white py-8">
        <div className="container-sm mx-auto px-4">
          <div className="md:grid flex flex-wrap md:grid-cols-3 md:gap-12 space-y-2 md:space-y-0">
            <div className="md:w-6/12 w-full md:block flex items-center gap-3.5">
              <div className="w-20 h-20 relative rounded-sm overflow-hidden bg-gray-700 md:mb-3">
                <Image
                  src="/professional-asian-restaurant-owner-portrait.jpg"
                  alt="LIN Zhengsen"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <p className="font-blauerBold text-navyBlue text-[15px] leading-none mb-0.5">{t.footer.owner}</p>
                <p className="text-black text-xs leading-none">LIN Zhengsen</p>
              </div>
            </div>

            <div className="space-y-2 md:space-y-4 w-full md:w-6/12">
              <div>
                <p className="font-blauerBold text-[15px] text-navyBlue ">{t.footer.contact}</p>
                <p className="text-navyBlue text-xs">
                  01 / 88 99 308
                </p>
              </div>
              <div>
                <p className="font-blauerBold text-[15px] text-navyBlue">
                  {t.footer.email}
                </p>

                <a
                  href="mailto:office@lins-kitchen.at"
                  className="text-navyBlue text-xs hover:underline"
                >
                  office@lins-kitchen.at
                </a>
              </div>
            </div>
            <div className="w-full">
              <p className="font-blauerBold text-[15px] text-navyBlue md:text-end mb-1">{t.footer.follow}</p>
              <div className="flex md:justify-end gap-2 md:mb-6 mb-4 md:mt-0 mt-1">
                <a
                  href="https://www.facebook.com/people/Lins-kitchen/100063616059233/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-7 h-7 rounded-full bg-navyBlue hover:bg-gray-700 flex items-center justify-center transition-colors"
                >
                  <svg width="10" height="19" viewBox="0 0 10 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.2998 0.303711C7.91268 0.303711 8.54569 0.358881 9.02832 0.414062C9.2506 0.439481 9.44015 0.464428 9.5791 0.484375V2.74609H8.42383C7.64118 2.74619 7.07737 2.99079 6.71484 3.40723C6.35913 3.8159 6.23633 4.34577 6.23633 4.84375V7.30371H9.38965L8.97266 10.0117H6.23633V18.0264H3.23926V10.0059H0.303711V7.29785H3.23926V4.46289C3.23932 3.08698 3.65151 2.05602 4.34277 1.36914C5.03468 0.681638 6.0417 0.303717 7.2998 0.303711Z" fill="white" stroke="#F3F3F4" strokeWidth="0.607813" />
                  </svg>
                </a>
                {/* <a
                  href="#"
                  className="w-7 h-7 rounded-full bg-navyBlue hover:bg-gray-700 flex items-center justify-center transition-colors"
                >
                  <svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="-mr-0.5">
                    <path d="M11.5293 2.979C11.8495 2.979 12.1074 3.23778 12.1074 3.55127C12.1073 3.86465 11.8494 4.12256 11.5293 4.12256C11.2094 4.12231 10.9523 3.86449 10.9521 3.55127C10.9521 3.23793 11.2093 2.97926 11.5293 2.979Z" fill="white" stroke="#F3F3F4" strokeWidth="0.607813" />
                    <path d="M7.59668 4.10156C9.47894 4.10163 11.0068 5.62269 11.0068 7.48828C11.0067 9.35374 9.47884 10.874 7.59668 10.874C5.71446 10.874 4.18669 9.35378 4.18652 7.48828C4.18652 5.62264 5.71436 4.10156 7.59668 4.10156ZM7.59668 4.82227C6.12387 4.82227 4.91602 6.02013 4.91602 7.48828C4.91618 8.95579 6.11739 10.1533 7.59668 10.1533C9.06933 10.1533 10.2772 8.95626 10.2773 7.48828C10.2773 6.02017 9.06943 4.82233 7.59668 4.82227Z" fill="white" stroke="#F3F3F4" strokeWidth="0.607813" />
                    <path d="M4.52832 0.303711H10.5459C12.8777 0.30389 14.7693 2.18675 14.7695 4.49902V10.4785C14.7695 12.791 12.8778 14.6736 10.5459 14.6738H4.52832C2.19622 14.6738 0.303718 12.7911 0.303711 10.4785V4.49902C0.303924 2.18664 2.19635 0.303711 4.52832 0.303711ZM4.52832 1.10352C2.6484 1.10352 1.11252 2.6264 1.1123 4.49902V10.4785C1.11231 12.3513 2.64828 13.875 4.52832 13.875H10.5459C12.4258 13.8748 13.9619 12.3512 13.9619 10.4785V4.49902C13.9617 2.62651 12.4257 1.1037 10.5459 1.10352H4.52832Z" fill="white" stroke="#F3F3F4" strokeWidth="0.607813" />
                  </svg>
                </a> */}
                {/* <a
                  href="#"
                  className="w-7 h-7 rounded-full bg-navyBlue hover:bg-gray-700 flex items-center justify-center transition-colors"
                >
                  <svg width="15" height="10" viewBox="0 0 15 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3.08789 0.303711H10.9834C12.5252 0.303825 13.7666 1.541 13.7666 3.06836V6.71582C13.7666 8.24318 12.5252 9.48036 10.9834 9.48047H3.08789C1.54595 9.48047 0.303711 8.24325 0.303711 6.71582V3.06836C0.303711 1.54093 1.54595 0.303711 3.08789 0.303711ZM5.73633 2.64062C5.64561 2.64209 5.54886 2.65651 5.45996 2.67969C5.37347 2.70225 5.27509 2.73827 5.19141 2.79297C5.12275 2.83794 4.97767 2.95294 4.97754 3.15234V6.72754C4.97754 6.92676 5.12201 7.04167 5.19141 7.08691C5.27482 7.14126 5.3717 7.17716 5.45703 7.19922C5.54508 7.22195 5.64049 7.23545 5.72949 7.2373C5.80494 7.23887 5.9196 7.23181 6.02246 7.18066L6.02344 7.18164L9.56152 5.44238L9.60645 5.4209L9.63477 5.3916C9.71852 5.32772 9.7784 5.23649 9.79297 5.12402C9.80817 5.00654 9.77007 4.90618 9.73633 4.8418C9.66878 4.71304 9.55156 4.60077 9.43652 4.53613L9.43164 4.53418L6.04395 2.70605H6.04492C5.93774 2.64586 5.81449 2.63939 5.73633 2.64062Z" fill="white" stroke="#F3F3F4" strokeWidth="0.607813" />
                  </svg>

                </a> */}
              </div>
              <p className="font-blauerBold text-[15px] text-navyBlue md:text-end mb-1">{t.footer.payment}</p>
              <p className="text-xs text-navyBlue md:text-end">{t.footer.paymentMethods}</p>
            </div>
          </div>
        </div>
      </footer>
      <p className="font-blauerBold text-white bg-navyBlue p-4 text-center text-sm md:text-base" >ALL COPYRIGHT RESERVED</p>
    </>
  )
}

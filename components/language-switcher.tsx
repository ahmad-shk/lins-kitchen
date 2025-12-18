"use client"

import { useLanguage } from "@/contexts/language-context"
import { Button } from "@/components/ui/button"

export function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage()

  return (
    <div className="flex gap-2">
      <Button
        variant={language === "de" ? "default" : "ghost"}
        size="sm"
        onClick={() => setLanguage("de")}
        className={language === "de" ? "bg-white text-navyBlue hover:text-white cursor-pointer" : "text-navyBlue md:text-white hover:bg-white/10 cursor-pointer"}
      >
        DE
      </Button>
      <Button
        variant={language === "en" ? "default" : "ghost"}
        size="sm"
        onClick={() => setLanguage("en")}
        className={language === "en" ? "bg-white text-navyBlue hover:text-white cursor-pointer" : "text-navyBlue md:text-white hover:bg-white/10 cursor-pointer"}
      >
        EN
      </Button>
    </div>
  )
}

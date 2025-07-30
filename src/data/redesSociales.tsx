import { TiktokIcon, FacebookIcon, IstagramIcon, XIcon, YoutubeIcon ,WhatsApp} from "../components/icons/redesSocialesIcons"
import type { PROPSREDESSOCIALES } from "../types/RedesSociales.types"
export const RedesSocialesPBO: PROPSREDESSOCIALES[] = [
  {
    NombreRedSocial: "Youtube",
    url: "https://www.youtube.com/@PBO",
    logo: <YoutubeIcon estilo="size-5 lg:size-7" />,
  },
  {
    NombreRedSocial: "Facebook",
    url: "https://www.facebook.com/PBOPeru",
    logo: <FacebookIcon estilo="size-5 lg:size-7" />
  },
  {
    NombreRedSocial: "X",
    url: "https://x.com/PBOPeru",
    logo: <XIcon estilo="size-5 lg:size-7" />
  },
  {
    NombreRedSocial: "Instagram",
    url: "https://www.instagram.com/pbo_digital/#",
    logo: <IstagramIcon estilo="size-5 lg:size-7" />
  },
  {
    NombreRedSocial: "Tik Tok",
    url: "https://www.tiktok.com/@pbo_digital",
    logo: <TiktokIcon estilo="size-5 lg:size-7"  />
  },
  {
    NombreRedSocial: "WhatsApp",
    url: "https://api.whatsapp.com/send/?phone=5116449550&text&type=phone_number&app_absent=0",
    logo: <WhatsApp estilo="size-6 lg:size-7" />,
    info: "+51 1 6449550"
  }

]

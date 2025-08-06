import { Facebook, Twitter, Instagram, Youtube, Phone } from 'lucide-react';
import type { PROPSREDESSOCIALES } from "../types/RedesSociales.types"
export const RedesSocialesPBO: PROPSREDESSOCIALES[] = [
  {
    NombreRedSocial: "Youtube",
    url: "https://www.youtube.com/@PBO",
    logo: <Youtube  className='h-5 w-5'/>,
  },
  {
    NombreRedSocial: "Facebook",
    url: "https://www.facebook.com/PBOPeru",
    logo: <Facebook className='h-5 w-5' />
  },
  {
    NombreRedSocial: "X",
    url: "https://x.com/PBOPeru",
    logo: <Twitter className='h-5 w-5' />
  },
  {
    NombreRedSocial: "Instagram",
    url: "https://www.instagram.com/pbo_digital/#",
    logo: <Instagram className='h-5 w-5' />
  },
  // {
  //   NombreRedSocial: "Tik Tok",
  //   url: "https://www.tiktok.com/@pbo_digital",
  //   logo: <TiktokIcon estilo="size-5 lg:size-7"  />
  // },
  {
    NombreRedSocial: "WhatsApp",
    url: "https://api.whatsapp.com/send/?phone=5116449550&text&type=phone_number&app_absent=0",
    logo: <Phone className='h-5 w-5' />,
    info: "+51 1 6449550"
  }

]

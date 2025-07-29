import { Modal } from "./modal"
import { useState } from "react"
import { ButtonCustom } from "../common"
import { ShareIcon } from "../icons/index"
import { RedesSociales } from "../common/RedesSociales/listRedsocial"
import { ArrowDownIcon } from "../icons/index"
export function ViewModalSocialMedia() {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <article className="fixed bottom-4 right-4 z-50">
            <ButtonCustom ariaLabel="Nuestras redes sociales " type="button" onClick={() => setIsOpen(true)} estilo="bg-PBO p-4 rounded-full text-white z-50 hover:scale-105" >
                <ShareIcon />
            </ButtonCustom>
            {
                isOpen && (
                    <Modal >
                        <div className="absolute bottom-20 right-4">
                            <ButtonCustom ariaLabel="Nuestras redes sociales " type="button" onClick={() => setIsOpen(false)} estilo="bg-PBO p-4 rounded-full text-white z-50" >
                                <ArrowDownIcon />
                            </ButtonCustom>
                            <RedesSociales estilo="flex-col gap-4 " />
                        </div>
                    </Modal>
                )

            }

        </article>

    )
}
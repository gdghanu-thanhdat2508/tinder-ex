import BlurText from "@/components/BlurText";
import CardSwap, { Card } from "@/components/CardSwap";
import Stepper, { Step } from "@/components/stepper";
import StepperHome from "@/components/StepperHome";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

export default function Home() {
  return (
    <div style={{ height: '600px', position: 'relative' }} className="flex items-center justify-center">
      <div className="flex flex-col justify-center items-center">
        <BlurText
          text="This website is sucks ! WHAT THE DUCK ?"
          delay={250}
          animateBy="words"
          direction="top"
          className="text-[50px] mb-8 font-bold uppercase ml-20"
        />
        <Dialog>
          <DialogTrigger>
            <div className="bg-black text-white py-2 px-5 rounded-md hover:cursor-pointer">
              DUCK DUCK DUCK !
            </div>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Make sure you are ready!</DialogTitle>
            </DialogHeader>
            <StepperHome />
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}

import React from "react";
import { Card, CardDescription } from "./ui/card";
import { Button } from "./ui/button";
import Image from "next/image";

const BotProcessing = () => {
  return (
    <>
      <Card className="text-center p-4 py-3 shadow-lg shadow-primary-foreground rounded-lg border-none">
        <CardDescription className="text-sm md:text-base font-medium text-white">
          Processing
        </CardDescription>
      </Card>
      <Button
        disabled={true}
        className="animate-fadeIn relative w-[120px] h-[120px] shadow-md rounded-full hover:bg-black bg-black overflow-hidden"
        aria-label={"Processing"}
      >
        <Image
          unoptimized={true}
          src={"/assets/aura-processing.gif"}
          alt={"aura-processing"}
          width={500}
          height={500}
          className="pointer-events-none absolute left-0 top-0 h-full w-full scale-[2] object-cover object-center"
        />
      </Button>
    </>
  );
};

export default BotProcessing;

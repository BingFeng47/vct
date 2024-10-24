import { BookText, Bot, Gamepad2, Ghost } from "lucide-react";
import { cn } from "@/lib/utils";
import { BentoCard, BentoGrid } from "./ui/bento-grid";
import Image from "next/image";


const features = [
  {
    Icon: Bot,
    name: "AI Team Builder",
    description: "Find the best team members according to the league",
    href: "./chatbot",
    cta: "Try Team Builder",
    className: "col-span-3 lg:col-span-1",
    background: (
      <div className={cn(
        "transform-gpu blur-[1px] transition-all duration-300 ease-out hover:blur-none",
        "relative"
      )}>
        <Image
          src="/feature/bot-light.png"
          alt="Valorant"
          width={400}
          height={400}
          className="absolute dark:hidden"
          style={{ maskImage: "linear-gradient(to top, transparent, black)" }}
        />
        <Image
          src="/feature/bot-dark.png"
          alt="Valorant"
          width={400}
          height={400}
          className="absolute hidden dark:block"
          style={{ maskImage: "linear-gradient(to top, transparent, black)" }}
        />
      </div>
    ),
  },
  {
    Icon: Ghost,
    name: "Player Details",
    description: "Players Stats Summarized For You",
    href: "./players",
    cta: "Search Players",
    className: "col-span-3 lg:col-span-2",
    background: (
      <div className={cn(
        "transform-gpu blur-[1px] transition-all duration-300 ease-out hover:blur-none",
        "relative"
      )}>
        <Image
          src="/feature/players-light.png"
          alt="Valorant"
          width={800}
          height={800}
          className="absolute dark:hidden"
          style={{ maskImage: "linear-gradient(to top, transparent, black)" }}
        />
        <Image
          src="/feature/players-dark.png"
          alt="Valorant"
          width={800}
          height={800}
          className="absolute hidden dark:block"
          style={{ maskImage: "linear-gradient(to top, transparent, black)" }}
        />
      </div>
    ),
  },
  {
    Icon: Gamepad2,
    name: "Feedback",
    description: "Leave a feedback to help us improve",
    href: "./feedback",
    cta: "Feedback",
    className: " col-span-3 lg:col-span-2",
    background: (
      <div className={cn(
        "transform-gpu blur-[1px] transition-all duration-300 ease-out hover:blur-none",
        "relative"
      )}>

        <Image
          src="/feature/feedback-light.png"
          alt="Valorant"
          width={800}
          height={800}
          className="absolute dark:hidden "
          style={{ maskImage: "linear-gradient(to top, transparent, black)" }}
        />

        <Image
          src="/feature/feedback-dark.png"
          alt="Valorant"
          width={800}
          height={800}
          className="absolute hidden dark:block"
          style={{ maskImage: "linear-gradient(to top, transparent, black)" }}
        />
      </div>
    ),
  },

  {
    Icon: BookText,
    name: "Docs",
    description: "Get To Know How We Did It!",
    className: "col-span-3 lg:col-span-1",
    href: "./docs",
    cta: "Learn more",
    background: (
      <div className={cn(
        "transform-gpu blur-[1px] transition-all duration-300 ease-out hover:blur-none",
        "relative w-full"
      )}>
        <Image
          src="/feature/documentation-light.png"
          alt="Valorant"
          width={400}
          height={400}
          className="absolute dark:hidden"
          style={{ maskImage: "linear-gradient(to top, transparent, black)" }}
        />
        <Image
          src="/feature/documentation-dark.png"
          alt="Valorant"
          width={400}
          height={400}
          className="absolute hidden dark:block"
          style={{ maskImage: "linear-gradient(to top, transparent, black)" }}
        />
      </div>
    ),
  },
];

export function Features() {
  return (
    <BentoGrid>
      {features.map((feature, idx) => (
        <BentoCard key={idx} {...feature} />
      ))}
    </BentoGrid>
  );
}

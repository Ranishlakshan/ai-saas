"use client";

import { Button } from "@/components/ui/button";
import { Card, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { UserButton } from "@clerk/nextjs";
import { ArrowRight, CodeIcon, ImageIcon, MessageSquare, MusicIcon, VideoIcon } from "lucide-react";
import { useRouter } from "next/navigation";

const tools = [
  {
    label:"Conversation",
    icon: MessageSquare,
    href:"/conversation",
    color:"text-sky-500"
  },
  {
    label:"Image Generator",
    icon: ImageIcon,
    href:"/image",
    color:"text-sky-500"
},
{
    label:"Video Generator",
    icon: VideoIcon,
    href:"/video",
    color:"text-sky-500"
},
{
    label:"Music Generator",
    icon: MusicIcon,
    href:"/music",
    color:"text-sky-500"
},
{
    label:"Code Generator",
    icon: CodeIcon,
    href:"/code",
    color:"text-sky-500"
}
]

const DashboardPage = () => {
const router = useRouter();

  return (
    <div>
      <div className="mb-8 space-y-4">
        <h2 className="text-2xl md:text-4xl font-bold text-center">
        Explore the Power of AI
        </h2>
        <p className="tet-muted-foreground font-light text-sm md:text-lg text-center">
          Chat with the Smartest AI - Experience the power of AI
        </p>
      </div>
      <div className="px-4 md:px-20 lg:px-32 space-y-4">
        {
          tools.map( (tool) => (
            <Card 
            onClick={() => router.push(tool.href) }
             key={tool.href}
             className="p-4 border-black/5 flex items-center justify-between hover:shadow-md transition cursor-pointer"
            >
              <div className="flex gap-x-4 item-center">
                <div className={cn("p-2 w-fit rounded-md ", tool.color)}>
                  <tool.icon className={cn("w-8 h-8 ", tool.color)} />
                </div>
                <div className="p-3 font-semibold">
                  {tool.label}
                </div>
              </div>
              <ArrowRight className="w-5 h-5 "/>
            </Card>
          ))
        }
      </div>
    </div>
  );
}

export default DashboardPage;

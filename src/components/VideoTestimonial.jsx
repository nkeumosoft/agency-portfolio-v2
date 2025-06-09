// app/components/VideoTestimonials.tsx

import videoTestimonials from "../data/videoTestimonials.json";
import { useEffect } from "react";
import { gsap } from "@/utils/gsap";

export default function VideoTestimonials() {
  useEffect(() => {
    const avatars = gsap.utils.toArray<HTMLElement>(".video-avatar");
    const videoElements = gsap.utils.toArray<HTMLElement>(".video-container");
    let activeIndex = 0;

    gsap.set(videoElements, { opacity: 0, pointerEvents: "none" });
    gsap.set(videoElements[activeIndex], { opacity: 1, pointerEvents: "auto" });
    gsap.set(avatars, { opacity: 0.5 });
    gsap.set(avatars[activeIndex], { opacity: 1 });

    avatars.forEach((avatar, index) => {
      avatar.addEventListener("click", () => {
        if (index === activeIndex) return;

        gsap.to(videoElements[activeIndex], {
          opacity: 0,
          pointerEvents: "none",
          duration: 0.5,
          ease: "power1.inOut",
        });
        gsap.to(videoElements[index], {
          opacity: 1,
          pointerEvents: "auto",
          duration: 0.5,
          delay: 0.1,
          ease: "power1.inOut",
        });

        gsap.to(avatars[activeIndex], { opacity: 0.5, duration: 0.3 });
        gsap.to(avatars[index], { opacity: 1, duration: 0.3 });

        activeIndex = index;
      });
    });
  }, []);

  return (
    <div className="w-full flex flex-col py-[100px] space-y-6 overflow-x-hidden">
      <div className="w-full flex items-center">
        <div className="w-2/3 md:w-[15%] uppercase text-sm md:text-lg text-[#70707b] font-normal">
          watch what our clients say
        </div>
        <div className="w-1/3 md:w-[85%] border border-muted-background"></div>
      </div>

      <div className="w-full h-auto md:flex-row items-start md:h-[400px] flex flex-col md:items-stretch">
        {/* Left: Video Player */}
        <div className="h-full w-full md:w-3/5 relative">
          {videoTestimonials.map((test, index) => (
            <div
              key={index}
              className="video-container absolute top-0 left-0 w-full h-full"
            >
              <div className="w-full h-full bg-black rounded-xl overflow-hidden flex items-center justify-center">
                <iframe
                  src={test.videoUrl}
                  title={`Testimonial by ${test.author}`}
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          ))}
        </div>

        {/* Right: Avatars */}
        <div className="h-full w-full md:w-2/5 flex mt-[200px] md:mt-0 flex-col md:items-end justify-end">
          <div className="flex items-center gap-2">
            {videoTestimonials.map((test, index) => (
              <div
                key={index}
                className="bg-gray-400 video-avatar cursor-pointer rounded-full w-[60px] h-[60px] overflow-hidden"
                aria-label={`Watch video from ${test.author}`}
              >
                <img
                  src={test.avatarUrl || "/fallback-avatar.jpg"}
                  alt={`Photo of ${test.author}`}
                  className="h-full w-full object-cover rounded-full"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

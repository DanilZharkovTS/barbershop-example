export default function VideoSection() {
  return (
    <section id="our-story-1" className="relative bg-[#052124] py-14 px-6 sm:px-10 lg:px-16 scroll-mt-20">
      <div className="max-w-[1200px] mx-auto">
        {/* Vimeo Video Container 16:9 Aspect Ratio */}
        <div className="relative w-full pb-[56.25%] h-0 overflow-hidden rounded-sm shadow-2xl border border-[#f2d383]/20 bg-black">
          <iframe
            src="https://player.vimeo.com/video/279284102?app_id=122963&wmode=opaque&title=0&byline=0&portrait=0"
            className="absolute top-0 left-0 w-full h-full border-0"
            title="Crows Nest Barbershop - Then & Now"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
          />
        </div>

        {/* Bottom Horizontal Rule */}
        <hr className="border-t border-[#f2d383]/25 mt-16" />
      </div>
    </section>
  );
}

import Image from 'next/image';
import Background from '../public/Images/SiteImages/BackgroundDesktopWhole.webp';

export default function Home() {
  return (
    <div>
      <div>
        <Image
          alt="Background"
          src={Background}
          placeholder="blur"
          loading="lazy"
          quality={100}
          style={{ backgroundPosition: "top", overflowY: "scroll", width: "100vw", height: "100%", objectFit: "cover" }}
        />
      </div>
    </div>
  )
}

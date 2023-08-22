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
          quality={100}
          fill
          sizes="100vw"
          style={{ backgroundPosition: "top", overflowY: "scroll", height: "100vh", objectFit: "cover" }}
        />
      </div>
    </div>
  )
}

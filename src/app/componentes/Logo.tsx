
import Image from "next/image"; 
import photo from "@/app/componentes/Image/Logo.png"
import photo1 from "@/app/componentes/Image/Logo (2).png"
import photo2 from "@/app/componentes/Image/Logo (3).png"
import photo3 from "@/app/componentes/Image/Logo (4).png"
import photo4 from "@/app/componentes/Image/Logo (5).png"
import photo5 from "@/app/componentes/Image/Logo (6).png"
import photo6 from "@/app/componentes/Image/Logo (1).png"

const Logo = () => {
  return (
    <div className="w-full flex flex-wrap justify-center items-center gap-20 pt-14 px-4">
      <div className="flex justify-center items-center">
        <Image src={photo} alt="Zaphier Logo" ></Image>
      </div>
      <div className="flex justify-center items-center">
        <Image
          src={photo6}
          alt="Pipe Drive Logo"
          width={107}
          height={109}
        ></Image>
      </div>
      <div className="flex justify-center items-center">
        <Image
          src={photo1}
          alt="Cib Bank Logo"
          width={135}
          height={139}
        />
      </div>
      <div className="flex justify-center items-center">
        <Image
          src={photo2}
          alt="Company 4 Logo"
          width={63}
          height={65}
        />
      </div>
      <div className="flex justify-center items-center">
        <Image
          src={photo3}
          alt="Burnt Toast Logo"
          width={98}
          height={101}
        />
      </div>
      <div className="flex justify-center items-center">
        <Image
          src={photo5}
          alt="Panda Doc Logo"
          width={113}
          height={115}
        />
      </div>
      <div className="flex justify-center items-center">
        <Image src={photo4} alt="Moz Logo" width={84} height={87} />
      </div>
    </div>
  );
};

export default Logo;
import Image from "next/image";
import One from "../public/images/1.png";
import Two from "../public/images/2.jpg";
import Three from "../public/images/3.jpg";
import Four from "../public/images/4.jpg";
import Five from "../public/images/5.jpg";
import Six from "../public/images/6.jpg";


function Gallery() {
	return (
		
			<div className="w-full my-20 h-auto flex flex-col justify-center items-center  ">
				<p className="text-sm uppercase text-gray-400">Portfolio</p>
				<h1 className="text-neutral-900 text-6xl font-bold text-center">
					All Projects
				</h1>
				<div className="md:flex sm:flex-col md:flex-row justify-center items-center gap-10 mt-10">
					<div className="rounded w-80 h-60 shadow-xl relative grayscale hover:grayscale-0">
						<Image
							src={One}
							alt="One"
							layout="fill"
							objectFit="cover"
							className="p-2 rounded cursor-pointer"
						/>
					</div>
					<div className="rounded w-80 h-60 shadow-xl relative grayscale hover:grayscale-0">
						<Image
							src={Two}
							alt="two"
							layout="fill"
							objectFit="cover"
							className="p-2 rounded cursor-pointer"
						/>
					</div>
					<div className="rounded w-80 h-60 shadow-xl relative grayscale hover:grayscale-0">
						<Image
							src={Three}
							alt="three"
							layout="fill"
							objectFit="cover"
							className="p-2 rounded cursor-pointer"
						/>
					</div>
				</div>
				<div className="md:flex sm:flex-col md:flex-row justify-center items-start sm:pb-10 md:gap-10 mt-10">
					<div className="rounded w-80 h-60 shadow-xl relative grayscale hover:grayscale-0">
						<Image
							src={Four}
							alt="four"
							layout="fill"
							objectFit="cover"
							className="p-2 rounded cursor-pointer"
						/>
					</div>
					<div className="rounded w-80 h-60 shadow-xl relative grayscale hover:grayscale-0">
						<Image
							src={Five}
							alt="five"
							layout="fill"
							objectFit="cover"
							className="p-2 rounded cursor-pointer"
						/>
					</div>
					<div className="rounded w-80 h-60 shadow-xl relative grayscale hover:grayscale-0">
						<Image
							src={Six}
							alt="six"
							layout="fill"
							objectFit="cover"
							className="p-2 rounded cursor-pointer"
						/>
					</div>
				</div>

				<h1 className="text-red-900 text-base my-10">
					Discover all projects on{" "}
					<a href="#" className="text-black font-semibold">
						Github{" "}
					</a>
				</h1>
			</div>
	
	);
}

export default Gallery;
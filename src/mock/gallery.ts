import VecnaImage from "../assets/images/serie-image-01.webp";
import PersonagensImage from "../assets/images/serie-image-02.webp";
import MainImage from "../assets/images/serie-image-03.webp";

interface ImageProps {
	id: number;
	src: string;
	alt: string;
}

export const gallery: ImageProps[] = [
	{
		id: 1,
		src: VecnaImage,
		alt: "Vecna",
	},
	{
		id: 2,
		src: PersonagensImage,
		alt: "Characters",
	},
	{
		id: 3,
		src: MainImage,
		alt: "Poster",
	},
];

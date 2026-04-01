import Image from "next/image";
import { ImageLightbox } from "./image-lightbox";

type ProjectCardProps = {
  title: string;
  category: string;
  color: string;
  image?: string;
  images?: string[];
};

export function ProjectCard({ title, category, color, image, images }: ProjectCardProps) {
  const card = (
    <div className="group">
      <div
        className="aspect-[4/3] overflow-hidden rounded-xl border border-border transition-colors group-hover:border-accent/50"
        style={image ? undefined : { backgroundColor: color }}
      >
        {image ? (
          <div className="relative h-full">
            <Image
              src={image}
              alt={title}
              width={400}
              height={300}
              className="h-full w-full object-cover object-top transition-transform duration-300 group-hover:scale-105"
            />
            <div className="pointer-events-none absolute inset-0 rounded-xl bg-black/15 ring-1 ring-inset ring-white/5 transition-opacity group-hover:bg-black/5" />
          </div>
        ) : (
          <div className="flex h-full items-center justify-center">
            <div className="text-4xl font-bold text-white/10">
              {title.charAt(0)}
            </div>
          </div>
        )}
      </div>
      <div className="mt-3">
        <h3 className="text-sm font-semibold text-text-primary">{title}</h3>
        <p className="text-xs text-text-secondary">{category}</p>
      </div>
    </div>
  );

  if (image) {
    const galleryImages = images?.length ? images : [image];
    return (
      <ImageLightbox images={galleryImages} alt={title}>
        {card}
      </ImageLightbox>
    );
  }

  return card;
}

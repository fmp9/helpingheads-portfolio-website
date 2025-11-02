import type { ImageMetadata } from "astro";

export interface categoryPreview {
  category: string;
  info: string;
  src: ImageMetadata;
  alt: string;
}

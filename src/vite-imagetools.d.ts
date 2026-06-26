type ImageMetadata = {
  src: string;
  width: number;
  height: number;
  format: string;
};

declare module "*.webp?w=*&as=metadata" {
  const metadata: ImageMetadata;
  export default metadata;
}

declare module "*.webp?w=*&as=srcset" {
  const srcset: string;
  export default srcset;
}

declare module "*.webp?w=*" {
  const src: string;
  export default src;
}

declare module "*.webp?w=*&blur=*" {
  const src: string;
  export default src;
}

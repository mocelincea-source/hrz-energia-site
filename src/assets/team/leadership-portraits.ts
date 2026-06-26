import eduardoMeta from "./eduardo-brito.webp?w=480&as=metadata";
import eduardoSrcSet from "./eduardo-brito.webp?w=320;480;640&as=srcset";
import eduardoBlur from "./eduardo-brito.webp?w=16&blur=10";

import fernandoMeta from "./fernando-oliveira.webp?w=480&as=metadata";
import fernandoSrcSet from "./fernando-oliveira.webp?w=320;480;640&as=srcset";
import fernandoBlur from "./fernando-oliveira.webp?w=16&blur=10";

import julianaMeta from "./juliana-scalzo.webp?w=480&as=metadata";
import julianaSrcSet from "./juliana-scalzo.webp?w=320;480;640&as=srcset";
import julianaBlur from "./juliana-scalzo.webp?w=16&blur=10";

import italoMeta from "./italo-david.webp?w=480&as=metadata";
import italoSrcSet from "./italo-david.webp?w=320;480;640&as=srcset";
import italoBlur from "./italo-david.webp?w=16&blur=10";

import tiagoMeta from "./tiago-cacozzi.webp?w=480&as=metadata";
import tiagoSrcSet from "./tiago-cacozzi.webp?w=320;480;640&as=srcset";
import tiagoBlur from "./tiago-cacozzi.webp?w=16&blur=10";

export type LeadershipPortrait = {
  src: string;
  srcSet: string;
  width: number;
  height: number;
  blurSrc: string;
};

export const LEADERSHIP_PORTRAITS: LeadershipPortrait[] = [
  { src: eduardoMeta.src, srcSet: eduardoSrcSet, width: eduardoMeta.width, height: eduardoMeta.height, blurSrc: eduardoBlur },
  { src: fernandoMeta.src, srcSet: fernandoSrcSet, width: fernandoMeta.width, height: fernandoMeta.height, blurSrc: fernandoBlur },
  { src: julianaMeta.src, srcSet: julianaSrcSet, width: julianaMeta.width, height: julianaMeta.height, blurSrc: julianaBlur },
  { src: italoMeta.src, srcSet: italoSrcSet, width: italoMeta.width, height: italoMeta.height, blurSrc: italoBlur },
  { src: tiagoMeta.src, srcSet: tiagoSrcSet, width: tiagoMeta.width, height: tiagoMeta.height, blurSrc: tiagoBlur },
];

export const LEADERSHIP_PORTRAIT_SIZES = "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw";

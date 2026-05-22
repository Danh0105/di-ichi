// src/config/metadata.ts

import type { Metadata } from "next";

export const siteMetadata: Metadata = {
  title: {
    default: "DI-ICHI",
    template: "%s | DI-ICHI",
  },

  description: "DI-ICHI Education",

  keywords: [
    "DI-ICHI",
    "STEM",
    "robotics",
    "giáo dục",
    "trẻ em",
  ],

  openGraph: {
    title: "DI-ICHI",
    description: "DI-ICHI Education",
    type: "website",
    locale: "vi_VN",
  },
};
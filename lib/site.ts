export const SITE_URL = "https://deutschland-iptv.online";
export const SITE_NAME = "Deutschland IPTV";
export const SUPPORT_EMAIL = "deutschland.iptv.support@gmail.com";

/** Open Graph / Twitter block shared by every indexable page. */
export function socialMetadata(path: string, title: string, description: string) {
  const images = [{ url: `${SITE_URL}/opengraph-image`, width: 1200, height: 630 }];
  return {
    openGraph: {
      type: "website" as const,
      locale: "de_DE",
      siteName: SITE_NAME,
      url: path,
      title: `${title} | ${SITE_NAME}`,
      description,
      images,
    },
    twitter: {
      card: "summary_large_image" as const,
      title: `${title} | ${SITE_NAME}`,
      description,
      images: images.map((image) => image.url),
    },
  };
}

/** Legal pages stay reachable but are kept out of the index. */
export const noindexRobots = { index: false, follow: true };

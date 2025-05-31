// Import the glob loader
import { glob, file } from "astro/loaders";
// Import utilities from `astro:content`
import { z, defineCollection } from "astro:content";
// Define a `loader` and `schema` for each collection
const blog = defineCollection({
  loader: glob({ pattern: '**/[^_]*.md', base: "./src/blog" }),
  schema: ({ image }) => z.object({
    title: z.string(),
    pubDate: z.date(),
    description: z.string(),
    image: image().optional(),
    alt: z.string().optional(),
    tags: z.array(z.string()),
    favorite: z.boolean()
  })
});

const patterns = defineCollection ({
  loader: glob({ pattern: '**/[^_]*.md', base: "./src/patterns" }),
  schema: ({ image }) => z.object({
    title: z.string(),
    pubDate: z.date(),
    originalSrc: z.string(),
    currentSrc: z.string().optional(),
    itemType: z.string(),
    yarn: z.array(z.string()),
    yarnWeight: z.array(z.string()),
    yardage: z.array(z.object({
      variant: z.string().optional(),
      yards: z.string(),
      meters: z.string()
    })),
    gauge: z.array(z.string()),
    needles: z.string().optional(),
    hooks: z.string().optional(),
    sizes: z.string(),
    finalMeasure: z.array(z.object({
      dimName: z.string(),
      inches: z.string(),
      cm: z.string()
    })),
    patternSource: z.object({
      link: z.string(),
      price: z.number()
    }),
    pattImage: image(),
    pattAlt: z.string(),
    topImg: image(),
    pictures: z.array(z.object({
      alt: z.string(),
      img: image()
    })),
    tags: z.array(z.string()),
    favorite: z.boolean()
  })
});

const links = defineCollection({
  loader: file("src/links/links.json", { parser: (text) => JSON.parse(text).links }),
});
// Export a single `collections` object to register your collection(s)
export const collections = { blog, patterns, links };
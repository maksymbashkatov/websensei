import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://websensei.online',
      lastModified: new Date(),
    },
    {
      url: 'https://websensei.online/uslugi/repetitor-po-programmirovaniyu',
      lastModified: new Date(),
    },
    {
      url: 'https://websensei.online/uslugi/mentor-po-programmirovaniyu',
      lastModified: new Date(),
    },
    {
      url: 'https://websensei.online/uslugi/sozdanie-veb-proekta-dlya-studentov',
      lastModified: new Date(),
    },
    {
      url: 'https://websensei.online/uslugi/sozdanie-veb-proekta-dlya-uchenikov',
      lastModified: new Date(),
    },
    {
      url: 'https://websensei.online/uslugi/sozdanie-veb-proekta-s-nulya',
      lastModified: new Date(),
    },
  ];
}
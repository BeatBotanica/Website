import { MetadataRoute } from "next";
import prisma from "@/lib/prisma";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const users = await prisma.user.findMany({
    select: {
      id: true,
    },
    take: 1,
  });

  return [
    {
      url: process.env.NEXTAUTH_URL as string,
      lastModified: new Date(),
    },
    ...users.map((user) => ({
      url: `${process.env.NEXTAUTH_URL as string}/${user.id}`,
      lastModified: new Date(),
    })),
  ];
}

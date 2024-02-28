import { createUploadthing, type FileRouter } from "uploadthing/next";
import { UploadThingError } from "uploadthing/server";
import { z } from "zod";

import { getSession } from "@/actions/session";
import prisma from "@/lib/prisma";

const f = createUploadthing();

const handleAuth = async () => {
  const session = await getSession();

  if (!session.isHost || !session.isLoggedIn)
    throw new UploadThingError("Unauthorized");
  return { uuid: session.uuid };
};

export const ourFileRouter = {
  propertyMedia: f({ image: { maxFileSize: "1MB", maxFileCount: 7 } })
    .input(z.object({ propertyId: z.string() }))
    .middleware(async ({ input }) => {
      const session = await getSession();
      const property = await prisma.property.findUnique({
        where: { id: input.propertyId },
      });

      if (!session.isHost || property?.hostId !== session.uuid) {
        throw new UploadThingError("Unauthorized");
      }
      return { propertyId: input.propertyId };
    })
    .onUploadComplete(async ({ metadata, file }) => {
      // This code RUNS ON YOUR SERVER after upload

      console.log("file url", file.url);
      console.log("propertyId", metadata.propertyId);
      const propertyMedia = await prisma.propertyMedia.create({
        data: {
          name: file.name,
          type: "image",
          url: file.url,
          propertyId: metadata.propertyId,
        },
      });

      // !!! Whatever is returned here is sent to the clientside `onClientUploadComplete` callback
      return { id: propertyMedia.id, url: propertyMedia.url };
    }),
} satisfies FileRouter;

export type OurFileRouter = typeof ourFileRouter;

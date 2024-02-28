"use client";

import { UploadFileResponse } from "uploadthing/client";
import { AlertCircle } from "lucide-react";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { UploadButton } from "@/lib/uploadthing";
import { useToast } from "@/components/ui/use-toast";
import { PropertyReturnType } from "@/types";

interface MediaFormProps {
  property: Omit<PropertyReturnType, "host" | "reservations">;
}

export default function MediaForm({ property }: MediaFormProps) {
  const { toast } = useToast();

  const onComplete = (
    res: UploadFileResponse<{
      id: string;
      url: string;
    }>[]
  ) => {
    toast({
      title: "Upload successful",
      description: `${res.length} ${
        res.length > 1 ? "files were" : "file was"
      }  successfully uploaded`,
    });
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {property.media.length >= 7 ? (
        <AlertDestructive />
      ) : (
        <UploadButton
          endpoint="propertyMedia"
          input={{ propertyId: property.id }}
          onClientUploadComplete={onComplete}
          onUploadError={(error: Error) => {
            // Do something with the error.
            console.log(`ERROR! ${error.message}`);
            toast({
              title: "Upload error",
              description: error.message,
              variant: "destructive",
            });
          }}
        />
      )}
    </main>
  );
}

export function AlertDestructive() {
  return (
    <Alert variant="destructive">
      <AlertCircle className="h-4 w-4" />
      <AlertTitle>Error</AlertTitle>
      <AlertDescription>
        You already have exceeded the total number of media allowed.
      </AlertDescription>
    </Alert>
  );
}

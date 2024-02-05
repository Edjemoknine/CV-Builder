"use client";

import { UploadButton } from "../../utils/uploadthing";
import { useRouter } from "next/navigation";

const UploadThing = () => {
  const router = useRouter();
  return (
    <div>
      <UploadButton
        endpoint="imageUploader"
        onClientUploadComplete={(res) => {
          // Do something with the response
          console.log("Files: ", res[0].url);
          if (res) {
            router.push(`?imageUrl=${res[0].url}`);
          }
          //   alert("Upload Completed");
        }}
        onUploadError={(error) => {
          // Do something with the error.
          alert(`ERROR! ${error.message}`);
        }}
      />
    </div>
  );
};

export default UploadThing;

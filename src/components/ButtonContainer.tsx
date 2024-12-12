"use client";
import Button from "./Button";

export default function ButtonContainer() {
  const handleDownload = (fileUrl: string) => {
    const link = document.createElement("a");
    link.href = fileUrl;
    link.download = fileUrl.split("/").pop() || "file.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="flex flex-col md:flex-row gap-4 mt-6">
      <Button
        variant="contained"
        onClick={() => handleDownload("/assets/pdfs/CacheLogic_Profile.pdf")}
      >
        View Profile
      </Button>
      <Button
        variant="outlined"
        onClick={() =>
          handleDownload("/assets/pdfs/CacheLogic_Project_Catalog.pdf")
        }
      >
        View Project Catalog
      </Button>
    </div>
  );
}

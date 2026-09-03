import { BrandLogo } from "@/components/brand-logo";
import { headers } from "next/headers";

export default async function Loading() {
  const urdu = (await headers()).get("x-gharmahir-locale") === "ur";
  return <div className="pageLoader" role="status" aria-live="polite" aria-label="Loading GharMahir">
    <div className="pageLoaderInner">
      <BrandLogo className="loaderBrand" priority />
      <div className="loaderTrack" aria-hidden="true" />
      <p>{urdu ? "آپ کا سروس پیج تیار کیا جا رہا ہے…" : "Preparing your service page…"}</p>
    </div>
  </div>;
}

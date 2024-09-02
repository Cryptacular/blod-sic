"use client";
import { usePathname, useSearchParams } from "next/navigation";
import Script from "next/script";
import { useEffect } from "react";

type WindowWithDataLayer = Window & {
  dataLayer: Record<string, any>[];
};

declare const window: WindowWithDataLayer;

export const sendPageViewEvent = (url: string) => {
  sendCustomEvent("pageview");
};

export const sendCustomEvent = (
  event: string,
  props: Record<string, string | number> = {}
) => {
  const data = {
    page: window.location.pathname,
    ...props,
    event,
  };

  try {
    if (typeof window.dataLayer !== "undefined") {
      window.dataLayer.push(data);
    } else {
      console.log(data);
    }
  } catch (err) {
    console.error(err);
  }
};

export function SendEvent({
  event,
  props,
}: {
  event: string;
  props?: Record<string, string | number>;
}) {
  useEffect(() => {
    sendCustomEvent(event, props);
  }, []);

  return <></>;
}

export default function GoogleTagManager() {
  const pathname = usePathname();

  useEffect(() => {
    if (pathname && pathname.length > 0) {
      sendPageViewEvent(pathname);
    }
  }, [pathname]);

  if (process.env.NODE_ENV !== "production") {
    return null;
  }

  return (
    <Script
      id="google-tag-manager"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: `
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','${process.env.NEXT_PUBLIC_GOOGLE_TAG_MANAGER_ID}');
  `,
      }}
    />
  );
}

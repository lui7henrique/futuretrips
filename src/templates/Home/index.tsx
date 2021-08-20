import { InfoOutline } from "@styled-icons/evaicons-outline"
import { LinkWrapper } from "components/LinkWrapper"
import { MapProps } from "components/Map"
import { NextSeo } from "next-seo"
import dynamic from "next/dynamic"

const Map = dynamic(() => import("components/Map"), { ssr: false })

export default function HomeTemplate({ places }: MapProps) {
  return (
    <>
      <NextSeo
        title="Future Trips"
        description="This is a site where I post all the places I will visit in the future! I hope you like it 💜"
        canonical="https://futuretrips.vercel.app/"
        openGraph={{
          url: "https://futuretrips.vercel.app/",
          title: "Future Trips",
          description:
            "This is a site where I post all the places I will visit in the future! I hope you like it 💜",
          images: [
            {
              url: "https://futuretrips.vercel.app/img/cover.jpg",
              width: 1280,
              height: 720,
              alt: "My Future Trips"
            }
          ]
        }}
      />
      <LinkWrapper href="/about">
        <InfoOutline size={32} aria-label="About" />
      </LinkWrapper>
      <Map places={places} />
    </>
  )
}

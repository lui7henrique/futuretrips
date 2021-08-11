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
        title="My Future Trips"
        description="This is a site where I post all the places I will visit in the future! I hope you like it 💜"
        canonical="https://futuretrips.vercel.app/"
        openGraph={{
          url: "https://futuretrips.vercel.app/",
          title: "My Future Trips",
          description:
            "This is a site where I post all the places I will visit in the future! I hope you like it 💜",
          images: [
            {
              url: "https://lh5.googleusercontent.com/kE-SZt74kPHUZW2Er4dxVsUKdr_JM7orTuC21temjN9DvbNBlaVwvOHn1lN4jexpnIZLDqNJHyLk5AM0ZDZ6=w1920-h969-rw",
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

import { CloseOutline } from "@styled-icons/evaicons-outline"
import { LinkWrapper } from "components/LinkWrapper"
import { NextSeo } from "next-seo"
import { useRouter } from "next/dist/client/router"
import Image from "next/image"

import * as S from "./styles"

/* eslint-disable @next/next/no-img-element */
type ImageProps = {
  url: string
  height: number
  width: number
}

export type PlacesTemplateProps = {
  place: {
    slug: string
    name: string
    description?: { html: string; text: string }
    gallery: ImageProps[]
  }
}

export default function PlacesTemplate({ place }: PlacesTemplateProps) {
  const router = useRouter()

  if (router.isFallback) return null
  return (
    <>
      <LinkWrapper href="/">
        <CloseOutline size={32} aria-label="Go back to map" />
      </LinkWrapper>
      <NextSeo
        title={`${place.name} - Trips`}
        description={place.description?.text}
        canonical="https://futuretrips.vercel.app/"
        openGraph={{
          url: "https://futuretrips.vercel.app/",
          title: `${place.name} - Trips`,
          description: place.description?.text,
          images: [
            {
              url: place.gallery[0].url,
              width: place.gallery[0].width,
              height: place.gallery[0].width,
              alt: `${place.name}`
            }
          ]
        }}
      />

      <S.Wrapper>
        <S.Container>
          <S.Heading>
            <h1>{place.name}</h1>
          </S.Heading>

          <S.Body>
            <div
              dangerouslySetInnerHTML={{
                __html: place.description?.html ?? ""
              }}
            />
          </S.Body>

          <S.Gallery>
            {place.gallery.map((image, index) => {
              return (
                <Image
                  src={image.url}
                  alt={place.name}
                  key={`photo-${index}`}
                  width={image.width}
                  height={image.height}
                  quality={75}
                />
              )
            })}
          </S.Gallery>
        </S.Container>
      </S.Wrapper>
    </>
  )
}

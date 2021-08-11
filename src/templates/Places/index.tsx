import { CloseOutline } from "@styled-icons/evaicons-outline"
import { LinkWrapper } from "components/LinkWrapper"
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
    description?: { html: string }
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
                  width={1000}
                  height={600}
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

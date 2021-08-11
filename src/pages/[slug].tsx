import client from "graphql/client"
import { GetPageBySlugQuery, GetPagesQuery } from "graphql/generated/graphql"
import { GET_PAGES, GET_PAGE_BY_SLUG } from "graphql/queries"
import { GetStaticProps } from "next"
import PageTemplate, { PageTemplateProps } from "templates/Pages"

export default function Page({ heading, body }: PageTemplateProps) {
  return <PageTemplate heading={heading} body={body} />
}

export async function getStaticPaths() {
  const { pages } = await client.request<GetPagesQuery>(GET_PAGES, {
    first: 10
  })

  const paths = pages.map(({ slug }: { slug: string }) => ({
    params: { slug }
  }))

  return { paths, fallback: true }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { page } = await client.request<GetPageBySlugQuery>(GET_PAGE_BY_SLUG, {
    slug: `${params?.slug}`
  })

  if (!page) return { notFound: true }
  return {
    props: {
      heading: page.heading,
      body: page.body.html
    }
  }
}

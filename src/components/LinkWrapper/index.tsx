import Link from "next/link"

import * as S from "./styles"

type LinkWrapperProps = {
  href: string
  children: React.ReactNode
}
export function LinkWrapper({ href, children }: LinkWrapperProps) {
  return (
    <S.Wrapper>
      <Link href={href}>{children}</Link>
    </S.Wrapper>
  )
}

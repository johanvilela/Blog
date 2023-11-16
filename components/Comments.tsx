'use client'

import { Comments as CommentsComponent } from 'pliny/comments'
import { useState } from 'react'
import siteMetadata from '@/data/siteMetadata'
import { useTheme } from 'next-themes'
import { Waline } from '@/components/Waline'

export default function Comments({ slug }: { slug: string }) {
  const [loadComments, setLoadComments] = useState(false)
  const { theme } = useTheme()

  return (
    <>
      {!loadComments && <button onClick={() => setLoadComments(true)}>Mostrar comentários</button>}
      {siteMetadata.comments && loadComments && (
        // <CommentsComponent commentsConfig={siteMetadata.comments} slug={slug} />
        <Waline
          path={slug}
          serverURL={process.env.NEXT_PUBLIC_WALINE_SERVER_URL as string}
          lang={'pt-BR'}
          locale={{
            nick: 'Nome',
            oldest: 'Antigos',
            latest: 'Recentes',
            hottest: 'Curtidos',
            sticky: 'Fixado',
          }}
          dark={theme === 'dark'}
          copyright={false}
          meta={['nick', 'mail']}
        />
      )}
    </>
  )
}

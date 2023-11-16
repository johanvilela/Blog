'use client'

import { createRef, useEffect, useRef } from 'react'
import { type WalineInstance, type WalineInitOptions, init } from '@waline/client'

import '@waline/client/dist/waline.css'
import '@/components/Waline.css'

export type WalineOptions = Omit<WalineInitOptions, 'el'> & { path: string }

export const Waline = (props: WalineOptions) => {
  const walineInstanceRef = useRef<WalineInstance | null>(null)
  const containerRef = createRef<HTMLDivElement>()

  useEffect(() => {
    walineInstanceRef.current = init({
      ...props,
      el: containerRef.current,
    })

    return () => walineInstanceRef.current?.destroy()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    walineInstanceRef.current?.update(props)
  }, [props])

  return <div ref={containerRef} />
}

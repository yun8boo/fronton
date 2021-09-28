import Image from 'next/image'
import { useMemo } from 'react'

const imageUrls = [
  '/fruits/apple.jpg',
  '/fruits/banana.jpg',
  '/fruits/cherry.jpg',
  '/fruits/orange.jpg',
  '/fruits/pine.jpg',
  '/fruits/strawberry.jpg',
  '/fruits/rime.jpg',
  '/fruits/rime.jpg',
]

export const DefaultImage = () => {
  const randomUrl = useMemo(() => imageUrls[ Math.floor(Math.random() * imageUrls.length)], [])
  return <Image className='rounded-lg' src={randomUrl} width='256px' height='256px' objectFit='cover' />
}
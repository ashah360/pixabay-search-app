import { Image } from '@/types/image';
import Link from 'next/link';
import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

/**
 * Styles
 */

const Container = styled.div<{ width: number; isImageLoaded: boolean }>`
  height: 240px;
  width: ${({ width }) => `${width}px`};
  cursor: pointer;
  position: relative;
  flex: 1 1 auto;
  background: rgba(255, 255, 255, 0.1);

  img {
    object-fit: cover;
    width: 100%;
    height: 100%;
    vertical-align: middle;
    border-radius: 2px;

    ${(props) =>
      !props.isImageLoaded &&
      `
      display: none;

    `}
  }
`;

/**
 * Interfaces
 */

interface SearchResultProps {
  image: Image;
}

/**
 * Component
 */

export default function SearchResult({
  image,
}: SearchResultProps): JSX.Element {
  const { webformatURL, webformatWidth, webformatHeight, id } = image;
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  const heightRatio = 240 / webformatHeight;
  const skeletonWidth = heightRatio * webformatWidth;

  return (
    <Container width={skeletonWidth} isImageLoaded={isImageLoaded}>
      <Link href={`/photos/${id}`}>
        <motion.img
          src={webformatURL}
          alt={`${id}`}
          key={id}
          whileHover={{
            scale: 1.025,
            transition: {
              duration: 0.2,
            },
          }}
          onLoad={() => setIsImageLoaded(true)}
        />
      </Link>
    </Container>
  );
}

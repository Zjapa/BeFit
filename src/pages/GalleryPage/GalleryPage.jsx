// import { useState, useCallback } from 'react';

import { photos } from './photos';
import FreeTrainingBg from '../../components/FreeTrainingBg/FreeTrainingBg';
import { MarginContainer } from '../../styles/commonStyles.styled';
import { GalleryContainer } from './GalleryPage.styled';
import Heading from '../../components/Heading/Heading';
import Gallery from '../../components/Gallery/Gallery';
import { useEffect } from 'react';

function GalleryPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <MarginContainer>
      <GalleryContainer>
        <Heading tag="h1" text="GALERIJA" margins={{ mb: '40px' }} />
        <Gallery photos={photos} />
      </GalleryContainer>
      <FreeTrainingBg />
    </MarginContainer>
  );
}

export default GalleryPage;

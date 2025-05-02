import { useState, useEffect } from 'react';

import api from '@/utils/api'
import PreviewShelf from '@/components/PreviewShelf';

import { Preview } from '@/types';
import home from '@/styles/Home.module.css'

function Home() {
  const [previewInfo, setPreviewInfo] = useState<Array<Array<Preview>> | null>(null);

  useEffect(() => {
  async function getPreview() {
    try{
      const res = await api.get('api/preview');
      setPreviewInfo(res.data);
    } catch (error) {
      console.error('Error pulling preview data' + error);
    }
  }
  getPreview()

  }, [])
  return (
    <div className="center-content">
      <div className={home.homeContainer}>
        <div className={home.splitContainer}>
          <div className={home.name}>
            <h1>Daniel Podgornyy</h1>
            <h3>Software Engineer</h3>
          </div>
          <PreviewShelf numTiles={3} title="What's new?" inputData={
            previewInfo
            ? previewInfo[0]
            : null}/>
        </div>
        <div className={home.splitContainer}>
          <PreviewShelf numTiles={4} title="Highlights" inputData={
            previewInfo
            ? previewInfo[1]
            : null}/>
        </div>
      </div>
    </div>
  )
}

export default Home;

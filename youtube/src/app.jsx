import React, { useEffect, useState } from 'react';
import SearchHeader from './components/search_header/search_header';
import VideoList from './components/video_list/video_list';
import styles from './app.module.css';
import VideoDetail from './components/video_detail/video_detail';

function App({ youtube }) {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  useEffect(() => {
    youtube
      .mostPopular()
      .then(videos => setVideos(videos));
  }, []);

  const onSearch = (keyword) => {
    youtube
      .search(keyword)
      .then(videos => setVideos(videos));
  }

  const onClickVideo = (video) => {
    setSelectedVideo(video);
  }

  return (
    <div className={styles.app}>
      <SearchHeader onSearch={onSearch} />
      <section className={styles.content}>
        {selectedVideo && <div className={styles.detail}>
          <VideoDetail video={selectedVideo} />
        </div>
        }
        <div className={styles.list}>
          {<VideoList videos={videos} onClickVideo={onClickVideo} display={selectedVideo ? 'list' : 'grid'} />}
        </div>
      </section>
    </div>
  );
}

export default App;

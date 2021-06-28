import React, { useEffect, useState } from 'react';
import SearchHeader from './components/search_header/search_header';
import VideoList from './components/video_list/video_list';
import styles from './app.module.css';

function App({ youtube }) {
  const [videos, setVideos] = useState([]);

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

  return (
    <div className={styles.app}>
      <SearchHeader onSearch={onSearch} />
      {<VideoList videos={videos} />}
    </div>
  );
}

export default App;

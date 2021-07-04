import React, { memo } from 'react';
import VideoItem from '../video_item/video_item';
import styles from './video_list.module.css';

const VideoList = memo((props) => (
    <ul className={styles.videos}>
        {props.videos.map((video, idx) =>
            (<VideoItem key={video.id} video={video} onClickVideo={props.onClickVideo} display={props.display} />)
        )}
    </ul>
));

export default VideoList;
import React from 'react';

const TorrentElement = ({metaData}) => {

	const {title, speed, progress} = metaData

	return (
		<div className={'TorrentElement'}>
			<div className={'TorrentInfo title'}>{title}</div>
			<div className={'TorrentInfo speed'}>{progress} %</div>
			<div className={'TorrentInfo progress'}>{speed} mb/s.</div>
			<div className={'TorrentDrive'}>
				<i className={'fa fa-play'} style={{color: '#75d33e'}}/>
				<i className={'fa fa-pause-circle'} style={{color: '#d93535'}}/>
			</div>
		</div>
	)
}

export default TorrentElement;
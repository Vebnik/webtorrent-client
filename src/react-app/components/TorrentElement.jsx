import React from 'react';

const TorrentElement = ({metaData}) => {

	const {name, speed, progress, hash} = metaData

	return (
		<div className={'TorrentElement'}>
			<div className={'TorrentInfo title'}>{name}</div>
			<div className={'TorrentInfo speed'}>{progress} %</div>
			<div className={'TorrentInfo progress'}>{speed} mb/s.</div>
			<div className={'TorrentDrive'}>
				<i className={'fa fa-play'} style={{color: '#75d33e'}} hash={hash}/>
				<i className={'fa fa-pause-circle'} style={{color: '#d93535'}} hash={hash}/>
			</div>
		</div>
	)
}

export default TorrentElement;
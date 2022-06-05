import React from 'react';
import TorrentElement from "./TorrentElement";

const TorrentList = ({torList}) => {
	return (
		<div className={'TorrentList'}>
			{torList.map((el, i)=> <TorrentElement key={i} metaData={el}/>)}
		</div>
	)
}

export default TorrentList;
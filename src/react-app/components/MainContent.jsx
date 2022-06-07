import React, {useMemo, useState} from 'react';
import SearchBar from "./SearchBar";
import TorrentList from "./TorrentList";
import {ContextMainRender} from "../context-bridge/contextMainRender";


const MainContent = () => {

	let [torList, setTorList] = useState([]) // let -> useMemo

	useMemo(() => setInterval(() => {
		ContextMainRender.getTorrents().then(dataTor => {
			setTorList(dataTor)
		})
	}, 500), torList)


	return (
		<div className={'MainContent'}>
			<SearchBar/>
			<TorrentList torList={torList} />
		</div>
	)
}

export default MainContent;
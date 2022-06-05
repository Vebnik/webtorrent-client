import React, {useState} from 'react';
import SearchBar from "./SearchBar";
import TorrentList from "./TorrentList";
import testArr from '../utils/testTorArray'

const MainContent = () => {

	const [torList, setTorList] = useState(testArr)

	return (
		<div className={'MainContent'}>
			<SearchBar/>
			<TorrentList torList={torList}/>
		</div>
	);
};

export default MainContent;
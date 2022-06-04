import React, {useState} from 'react';
import AddNewFile from "./AddNewFile";

const SearchBar = () => {

	const [title, setTitle] = useState('')
	const getInputText = (ev) => setTitle(ev.target.value)
	const searchTorrent = (ev) => {ev.preventDefault(); console.log(title)}

	return (
		<div className={'SearchBar'}>
			<form className={'SearchBarForm'}>
				<input className={'SearchBarInput'} onChange={getInputText}/>
				<button className={'SearchBarSubmit'} onClick={searchTorrent}>Search</button>
			</form>
			<AddNewFile/>
		</div>
	)
}

export default SearchBar;
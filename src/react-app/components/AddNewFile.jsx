import React from 'react';
import {ContextMainRender} from "../context-bridge/contextMainRender";

const AddNewFile = () => {
	return (
		<div className={'AddNewFile'}>
			<i className={'fa fa-file-upload'} title={'Add torrent'} onClick={ContextMainRender.addTorrentOnFile}/>
			<i className={'fa fa-folder'} title={'Open download folder'} onClick={ContextMainRender.openDownloadFolder}/>
			<i className={'fa fa-cogs'} title={'Setting'}/>
		</div>
	)
}

export default AddNewFile;
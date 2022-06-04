import React from 'react';

const WindowBar = () => {
	return (
		<div className={'WindowBar'}>
			<div className={'WindowDrag'}/>
			<div className={'WinMinimize'}><i className={'fa-solid fa-window-minimize'}/></div>
			<div className={'WimClose'}><i className="fa-solid fa-xmark"/></div>
		</div>
	)
}

export default WindowBar;
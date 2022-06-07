import React from 'react';
import { ContextMainRender } from "../context-bridge/contextMainRender";

const WindowBar = () => {
	const close = () => {
		console.log('in WindowBar')
		ContextMainRender.minCloseWindow('close')
	}
	const min = ()  => {
		console.log('in WindowBar')
		ContextMainRender.minCloseWindow('min')
	}

	return (
		<div className={'WindowBar'}>
			<div className={'WindowDrag'}/>
			<div className={'WinMinimize'} onClick={min}>
				<i className={'fa-solid fa-window-minimize'}/>
			</div>
			<div className={'WimClose'} onClick={close}>
				<i className="fa-solid fa-xmark"/>
			</div>
		</div>
	)
}

export default WindowBar;
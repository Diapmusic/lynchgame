import React, {useState } from "react";
import './progress.css'
const Progress = ({done}) => {
	const [style, setStyle] = React.useState({});
	
	setTimeout(() => {
		const newStyle = {
			opacity: 1,
			width: `${done}%`
		}
		
		setStyle(newStyle);
	}, 200);
	
	return (
		<div className="progress">
			<div className="progress-done" style={style}>
				{done}MTV
			</div>
		</div>
	)
}

const Prog = () => (
	<>
    <div className="prog1">
		<h1 className="prog">Fund Raised</h1>
		<Progress done="0"/>
    </div>

	</>
);

export default Prog
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

	<div className="prog1">
          <h3 className="prog">Minimum purchase amount : 100$ or Equivalent in MTV </h3>
          <h3 className="prog">Curent Rate per Token : 0.004$ </h3>
    </div>
	

	</>
);

export default Prog
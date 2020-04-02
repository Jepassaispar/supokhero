import React, { useState, useEffect } from 'react';
import Attack from './Attack';

const Actions = ({ actions, fighters, category, setFighters }) => {

  const [action, setAction] = useState("")

	return (
		<div className="actions">
			<span onClick={() => actions.attack(fighters, category, setFighters)}>Attack</span>
			<span>Object</span>
			<span>Charm</span>
			<span>Run</span>
		</div>
	);
};

export default Actions;
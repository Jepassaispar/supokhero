import React, { useState, useEffect } from 'react';

const Hp = ({ character, hp }) => {
	const [ totalHp, setTotalHp ] = useState({
		[character.name]: character.hp
	});

	useEffect(
		() => {
			if (!totalHp[character.name]) setTotalHp({ [character.name]: character.hp });
		},
		[ character ]
	);

	return (
		<div className="hpContainer">
			{console.log(totalHp)}
			<div className="hp">{hp || '0'}</div>
			<input
				onChange={() => hp}
				//this onChange event is only here to avoid ugly React Warnings
				type="range"
				value={hp || '0'}
				max={totalHp[character.name] || hp}
				className="hpBar"
			/>
			<div className="totalHp">{totalHp[character.name]}</div>
		</div>
	);
};

export default Hp;

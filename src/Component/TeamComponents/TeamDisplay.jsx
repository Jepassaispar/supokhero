import React from 'react';
import OneFighter from './OneFighter';
import pokeball from './../../public/pokeball.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faTimes } from '@fortawesome/free-solid-svg-icons';

const star = <FontAwesomeIcon icon={faStar} />;
const cross = <FontAwesomeIcon icon={faTimes} />;

const TeamDisplay = ({ team }) => {
	return (
		<div className="teamDisplay">
			{team &&
				team.map((fighter, i) => {
					return fighter.hp > 0 ? (
						<div className="imageContainer" key={i}>
							{team[0].category === 'Pokemon' && <OneFighter img={pokeball} />}
							{team[0].category === 'Hero' && <span className="star">{star}</span>}
						</div>
					) : (
						<span className="image" key={i}>
							{cross}
						</span>
					);
				})}
		</div>
	);
};

export default TeamDisplay;

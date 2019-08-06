import React from 'react';
import Header from '../../components/header/Header';
import BlueTextBox from '../../components/blueTextBox/BlueTextBox';
import Prototype from '../../data/prototype.json';
import './About.scss';

export default class About extends React.Component {
	render() {
		return (
			<div className="t_about">
				<Header />
				<div className="t_about__intro">
					<div className="g_center">
						<h2>The challenge...</h2>
						<p>We are not a typical 24-hour hackaton.</p>
						<p>The challenge lasts for three days where we except your team to compete with determination. The winner will get a magnificent trophy, alongside honour and glory.</p>
					</div>
				</div>

				<div className="c_blue-boxes c_blue-boxes--three">
					<div className="g_center">
						{Prototype.whereWhenWhat.map(item => 
						(
							<BlueTextBox
							item={item}
							key={item.id}
							/>
						))}
					</div>
				</div>
			</div>
		);
	}
}
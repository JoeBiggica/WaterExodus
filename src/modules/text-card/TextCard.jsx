import React, { Component } from 'react';

import styles from './TextCard.scss';

export default class TextCard extends Component {


	render() {
		const { thumb, title, subtitle, text, centered, button } = this.props;

		const card_styles = {
			backgroundImage: `url(${thumb})`,
		}

		return(
			<div className={styles('container')}>
				<div className={styles('inner')}>
					{ thumb && 
						<div className={styles('thumb')} style={card_styles} />
					}
					<div className={styles('info')}>
						<h3 className={styles('title')}>{title}</h3>
						{ subtitle && <p className={styles('subtitle')}>{subtitle}</p> }
						<p className={styles('text')}>{text}</p>
						{ button && <span className={styles('button')}><a href={button.path}>{button.text}</a></span> }
					</div>
				</div>
			</div>
		)
	}
}
import React, { Component } from 'react';

import styles from './TextBanner.scss';

export default class TextBanner extends Component {

	render() {
		const { background, title, text, centered, button, small_text, image } = this.props;

		const container_classname = styles('container', {
			'green': background == 'green'
		});

		const content_classname = styles('content', {
			'center': centered
		});

		const copy_classname = styles('copy', {
			'center': centered
		});

		const text_classname = styles('text', {
			'small': small_text
		});

		return(
			<div className={container_classname}>
				<div className={content_classname}>
					<div className={copy_classname}>
						{ title && <h2 className={styles('title')}>{title}</h2> }
						{ text && <h4 className={text_classname}>{text}</h4> }
					</div>
					{ button && <span className={styles('button')}><a href={button.path}>{button.text}</a></span> }
					{ image && <div className={styles('image')}><img src={`${image}`} /></div> }
				</div>
			</div>
		)
	}
}
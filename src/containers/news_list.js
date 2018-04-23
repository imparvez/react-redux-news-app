import React, { Component } from 'react';
import { connect } from 'react-redux';

class NewsDetail extends Component{
	renderNewsDetail(news){
		console.log('news: ', news.articles);
		var newsListHTML = news.articles.map((item, index) => {
			console.log('ITEM INSIDE => ', item.title);
			const newsTitle = item.title;
			const newsAuthor = (item.author !== null) ? item.author : 'Anonymous';
			const newsDescription = item.description;
			const newsLink = item.url;
			const newsImageURL = item.urlToImage;

			return(
				<div className="news-list-item">
					<h2>{newsTitle}</h2>
				</div>
			)
		})

		return newsListHTML;

	}

	render(){
		return(
			<div className="news-list">
				{this.props.news && this.props.news.length > 0 && this.props.news.map(this.renderNewsDetail)}
			</div>
		)
	}
}

function mapStateToProps(state){
	return { news: state.news }
}

export default connect(mapStateToProps)(NewsDetail);
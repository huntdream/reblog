import * as React from 'react';
import Title from './Title';
import Author from './Author';
import { ArticleType } from '../ArticleList';

import './style.sass';

export interface ArticleProps {
  article: ArticleType;
}

class Article extends React.Component<ArticleProps, any> {
  render() {
    const { article } = this.props;
    const { title, author, date, content } = article;

    return (
      <div className="article-wrap">
        <Title>{title}</Title>
        <Author>{author}</Author>
        <span>{date}</span>
        <div>{content}</div>
      </div>
    );
  }
}

export default Article;

import React from 'react';
import NewsItem from './news_list_item';

const NewsList = (props: any) => {
  const items = props.news.map((item: any) => {
    return <NewsItem key={item.id} item={item} />;
  });
  return (
    <div>
      {props.children}
      {items}
    </div>
  );
};

export default NewsList;

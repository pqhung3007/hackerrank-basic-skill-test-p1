import React, { useState } from 'react';
import './App.css';
import 'h8k-components';

import Articles from './components/Articles';

const title = "Sorting Articles";

function App({ articles }) {

    const compareFunc = (a, b) => {
        if (a[sortType] > b[sortType]) {
            return -1
        } else if (a[sortType] < b[sortType]) {
            return 1
        }
        return 0
    }

    const [sortType, setSortType] = useState('upvotes')
    const [sortedArticles, setSortedArticles] = useState(articles.sort(compareFunc))

    const handleSortByVotes = () => {
        setSortType('upvotes')
        setSortedArticles(sortedArticles.sort(compareFunc))
    }

    const handleSortByDate = () => {
        setSortType('date')
        setSortedArticles(sortedArticles.sort(compareFunc))

    }

    return (
        <div className="App">
            <h8k-navbar header={title}></h8k-navbar>
            <div className="layout-row align-items-center justify-content-center my-20 navigation">
                <label className="form-hint mb-0 text-uppercase font-weight-light">Sort By</label>
                <button data-testid="most-upvoted-link" className="small" onClick={handleSortByVotes}>Most Upvoted</button>
                <button data-testid="most-recent-link" className="small" onClick={handleSortByDate}>Most Recent</button>
            </div>
            <Articles articles={articles} />
        </div>
    );

}

export default App;

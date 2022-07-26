import React, { Component } from 'react'
import NewsItems from './NewsItems'
// import Spinner from './Spinner';

export class News extends Component {

    static defaultProps = {
        country: 'in',
        pageSize: 5,
        category: 'general'
    }
    // static propTypes = {
    //     country: this.propTypes.string,
    //     pageSize: this.propTypes.Number
    // }
    constructor() {
        super();
        this.state = {
            articles : [],
            loading : false,
            page: 1
        }
    }

    async updateNews() {
        const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=7994c63c1f61444b97d5eae8c85ff705&page=${this.state.page}&pageSize=${this.props.pageSize}`;
        // this.setState({
        //     loading: true
        // })
        let data = await fetch(url);
        let parsedData = await data.json();
        console.log(parsedData);
        this.setState({
            articles: parsedData.articles,
            totalResults: parsedData.totalResults,
            // loading: false
        });
    }

    // It runs after the render function has completed its task
    async componentDidCatch() {
        // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=7994c63c1f61444b97d5eae8c85ff705&page=1&pageSize=${this.props.pageSize}`;
        // // this.setState({
        // //     loading: true
        // // })
        // let data = await fetch(url);
        // let parsedData = await data.json();
        // console.log(parsedData);
        // this.setState({
        //     articles: parsedData.articles, 
        //     totalResults: parsedData.totalResults,
        //     // loading: false
        // });
        this.updateNews();
    }
    handleBackClick = async () => {
        console.log('back');
        // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=7994c63c1f61444b97d5eae8c85ff705&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
        // // this.setState({
        // //     loading: true
        // // })
        // let data = await fetch(url);
        // let parsedData = await data.json();
        // console.log(parsedData);
        // this.setState({
        //     page: this.state.page-1,
        //     articles: parsedData.articles,
        //     // loading: false
        // });
        this.setState({
            page: this.state.page-1
        })
        this.updateNews();
    }
    handleNextClick = async () => {
        console.log('next');
        // if(this.state.page+1 > Math.ceil(this.state.totalResults)/20){
            
        // }
        // else {
        //     let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=7994c63c1f61444b97d5eae8c85ff705&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
        //     // this.setState({
        //     //     loading: true
        //     // })
        //     let data = await fetch(url);
        //     let parsedData = await data.json();
        //     this.setState({
        //         page: this.state.page + 1,
        //         articles: parsedData.articles,
        //         // loading: false
        //     });
        // }
        this.setState({
            page: this.state.page+1
        })
        this.updateNews();
    }
    render() {
        return (
            <>
                <div className='container my-3'>
                    <h1 className='text-center my-5'>Today's Latest Breaking News Fellas !!!</h1>
                    <p className='text-center my-5'>press next to go to the next page &rarr;</p>
                    <p className='text-center my-5'>&larr; press back to go to the previous page</p>
                    {/* {this.state.loading && <Spinner></Spinner>} */}
                    <InfiniteScroll
                        dataLength={this.state.articles.length}
                        next={this.fetchMoreData}
                        hasMore={true}
                        loader={<h4>Loading...</h4>}>
                        <div className='row'>
                            {this.state.articles.map((element) => {
                                return <div className='col-md-3' key={element.url}>
                                    <NewsItems title={element.title ? element.title : ""}
                                        description={element.description ? element.description : ""}
                                        imageUrl={element.urlToImage}
                                        newsUrl={element.url}
                                        author={element.author}
                                        date={element.publishedAt}>
                                    </NewsItems>
                                </div>
                            })}
                        </div>
                        </InfiniteScroll>
                    <div className="container">
                        <div className="d-flex justify-content-between">
                            <button disabled={this.state.page<=1} type="button" className="btn btn-dark mx-2 my-4" onClick={this.handleBackClick}>&larr; Back</button>
                            <button disabled={this.state.page + 1 > 5} type="button" className="btn btn-dark mx-2 my-4" onClick={this.handleNextClick}>Next &rarr;</button>
                        </div>
                    </div>
                </div>
                <p style={{
                    display: 'flex',
                    justifyContent: 'center',
                    margin: '160px'
                }}>Made by Utkarsh Somvanshi</p>
            </>
        )
    }
}
export default News;
// && - This act as then if-else condition
// !this.state.loading && 
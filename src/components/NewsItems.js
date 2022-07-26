import React, { Component } from 'react'

export class NewsItems extends Component {
  render() {
        // It means from the object this.props the title and description will be provided
        var { title, description, imageUrl, newsUrl, author, date } = this.props;
        return (
            <div className='my-3'>
                <div className="card" style={{width: '18rem'}}>
                    <img src={imageUrl} className="card-img-top" alt=''/>
                        <div className="card-body">
                            <h5 className="card-title">{title}</h5>
                            <p className="card-text">{description}</p>
                            <p className="card-text"><small className="text-muted">By {!author?'Unknown':author} on {new Date(date).toGMTString()}</small></p>
                            <a href={newsUrl} className="btn btn-sm btn-primary">Details</a>
                        </div>
                </div>                
            </div>
        )
    }
}
export default NewsItems;
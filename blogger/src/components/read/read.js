import React, { Component } from 'react'
import { connect } from 'react-redux'
import { readpost } from '../../actions/readaction'
import './read.css'
class read extends Component {
    constructor(props) {
        super(props);
        fetch('http://localhost:5000/api/blogs/').then(res => res.json()).then(data => this.props.fetchpost(data))


    }
    render() {
        const blogs = this.props.posts.map(post => (
            <div className='blog' key={post.id}>
                <h3>{post.title}</h3>
                <h6>{post.author}</h6>
                <p>{post.body}</p>
            </div>
        ))
        return (<div>
            <h2 className='pagetitle'>Happy Reading :)</h2>
            {blogs}
        </div>


        )
    }
}
const mapstatetoprops = state => {
    return {
        posts: state.read.items
    }
}
const mapdispatchtoprops = ({
    fetchpost: readpost
})
export default connect(mapstatetoprops, mapdispatchtoprops)(read)
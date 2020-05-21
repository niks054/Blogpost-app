import React, { Component } from 'react'
import {
    Button, Form, FormGroup, Label, Input, Col
} from 'reactstrap';
import './form.css'
import { connect } from 'react-redux';
import { submitaction } from '../../actions/submitaction'
class create extends Component {
    constructor(props) {
        super(props)
        this.state = {

            author: '',
            title: '',
            body: ''

        }
    }
    onChange = (e) => {
        this.setState(
            {
                [e.target.name]: e.target.value
            })

    }
    submitpost = () => {
        const post = {
            author: this.state.author,
            title: this.state.title,
            body: this.state.body
        }
        if (post.author.trim() !== '' && post.title.trim() !== '' && post.body.trim() !== '') {
            console.log(JSON.stringify(post))
            fetch('https://polar-citadel-40500.herokuapp.com/api/blogs/', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(post)
            }).then(res => {
                if (res.ok) {
                    alert('Your Blog is published')
                    this.setState({
                        author: '',
                        title: '',
                        body: ''
                    })
                }
                if (!res.ok)
                    alert('Your blog seems to be incomplete')
                res.json()
            }).then(this.props.submit(post))
        }
        else {
            alert('You don\'t seem to be serious')
        }
    }
    render() {
        return (
            <div>
                <Form>
                    <FormGroup row>
                        <Label for="Authorname" sm={2}>Author:</Label>
                        <Col sm={10}>
                            <Input type="text" name="author" id="author" placeholder="Author's Name" onChange={this.onChange} value={this.state.author} />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label for="blogtitle" sm={2}>Title:</Label>
                        <Col sm={10}>
                            <Input type="" name="title" id="title" placeholder="Title" onChange={this.onChange} value={this.state.title} />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label for="blogpost" sm={2}>Body:</Label>
                        <Col sm={10}>
                            <Input type="textarea" name="body" id="blog" onChange={this.onChange} value={this.state.body} />
                        </Col>
                    </FormGroup>
                    <FormGroup check row>
                        <Col sm={{ size: 10, offset: 2 }}>
                            <Button color="danger" onClick={this.submitpost} >Submit</Button>
                        </Col>
                    </FormGroup>
                </Form>
            </div >
        )

    }
}
const mapdispatchtoprops = {
    submit: submitaction
}
const mapstatetoprops = (state) => {
    return {
        blog: state.submit
    }
}
export default connect(mapstatetoprops, mapdispatchtoprops)(create)
import { Component } from "react";
import { Form } from "react-bootstrap";


class FetchPost extends Component{
    
    constructor(props){
        super(props)

        this.state = {
            userId: " ",
            title: " ",
            body: " "
        };
    }

    changeHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    submitHandler = (e) => 
    {
        e.preventDefault()
        fetch("https://jsonplaceholder.typicode.com/posts", {
            method: 'POST',
            headers: {
                Accept: "application/json",
                "content-type": "application/json"
            },
            body : JSON.stringify(this.state)
        })
        .then(response => response.json())
        .then(response => console.log(response))
        .then(error => console.log(error))
    }

    render(){

        const {userId, title, body} = this.state;

        return(
            <div>
                <Form onSubmit = {this.submitHandler}>
                    <div>
                        <label>User Id:</label>
                        <input 
                        type="text"
                        placeholder="Your Id"
                        name="user id"
                        value={userId}
                        onChange = {this.changeHandler}
                        />
                    </div>

                    <div>
                        <label>Title:</label>
                        <input 
                        type="text"
                        placeholder="Your Title"
                        name="title"
                        value={title}
                        onChange = {this.changeHandler}
                        />
                    </div>

                    <div>
                        <label>Body:</label>
                        <input 
                        type="text"
                        placeholder="Your message"
                        name="body"
                        value={body}
                        onChange = {this.changeHandler}
                        />
                    </div>

                    <button type="submit">Submit Now</button>
                </Form>
            </div>
        )
    }
}

export default FetchPost;
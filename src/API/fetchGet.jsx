import { Component } from "react";

class FetchGet extends Component{
    constructor(props){
        super(props)

        this.state = {
            posts : []
        }
    }

    componentDidMount(){
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then(response => response.json())
            .then(response => 
                this.setState({
                    posts : response
                })
            )
        .catch(err => console.log(err))
    }

    render(){
        const post = this.state.posts;
        console.log(post);
        return(
            <div>
                <h3>list of Posts with fetch method</h3>
                {
                    post.map(post => <div key={post.id} >{post.title}</div>)
                }
            </div>
        )
    }
}


export default FetchGet;
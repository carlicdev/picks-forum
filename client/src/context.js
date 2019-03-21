import React, { Component } from 'react';
import { allPosts, allUsers } from '../src/data';

function compare(a, b) {
    if(a.date > b.date) {
        return -1;
    }
    if(a.date < b.date) {
        return 1;
    }
    else {
        return 0;
    }
  }




// Context
const PostContext = React.createContext();

// Provider
class PostProvider extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: [],
            lastPosts: [],
            users: [],
        }
    }

    componentWillMount() {
        this.setPosts();
        this.getLastPosts(allPosts);
    }





    setPosts = () => {
        let tempPosts = [];
        allPosts.forEach(post => {
            const singlePost = {...post};
            tempPosts = [...tempPosts, singlePost];
        });
        tempPosts = tempPosts.sort(compare);
        this.setState(() => {
            return {posts: tempPosts}
        })
    }

    setUsers = () => {
        let tempUsers = [];
        allUsers.forEach(user => {
            const singleUser = {...user};
            tempUsers = [...tempUsers, singleUser];
        });
        this.setState(() => {
            return {users: tempUsers}
        })
    }

    getLastPosts = posts => {
        let tempLastPosts = [];
        let orderedPosts = posts.sort(compare);
        let tempPosts = orderedPosts.map(post => {
            return post.topSubject;
        });
        let tempSubjects = new Set(tempPosts);
        let tempTopSubjects = Array.from(tempSubjects);
        tempTopSubjects = [...tempTopSubjects];
        tempTopSubjects.forEach(subject => {
            const singleSubject = subject;
          const singlePost =  orderedPosts.find(post => {
                return post.topSubject === singleSubject
            });
            tempLastPosts = [...tempLastPosts, singlePost];
        });
        this.setState(() => {
            return {lastPosts: tempLastPosts}
        })
    }
    

    render() {
        return (
            <PostContext.Provider value= {{
                ...this.state,
            }}>
                {this.props.children}
            </PostContext.Provider>
        );
    }
}

// Consumer
const PostConsumer = PostContext.Consumer;

export { PostProvider, PostConsumer };
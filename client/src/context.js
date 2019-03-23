import React, { Component } from 'react';
import { allUsers } from '../src/data';

function compare(a, b) {
    if(a.timestamp > b.timestamp) {
        return -1;
    }
    if(a.timestamp < b.timestamp) {
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
            categories: [],
            subjects: [],
            threads: [],
            users: [],
        }
    }

    componentDidMount() {
        let setAll = [
            this.setCategories(),
            this.setSubjects(),
            this.setThreads(),
            this.setPosts(),
        ];

        Promise.all(setAll);
    }




      setPosts  = async () => {
        await fetch('/api/forum/posts')
            .then(response => response.json())
            .then((response) => {
                let tempPosts = [];
                response.forEach(post => {
                    const singlePost = {...post};
                    tempPosts = [...tempPosts, singlePost];
                });
                tempPosts = tempPosts.sort(compare);
                this.setState(() => {
                    return {posts: tempPosts};
                });
            })
            .catch(err => console.error(err));
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

    setCategories = async () => {
        await fetch('/api/forum/categories')
            .then(response => response.json())
            .then((response) => {
                this.setState(() => {
                    return {categories: response}
                })

            })
            .catch(err => console.log(err));

    }

    setSubjects = async () => {
       await fetch('/api/forum/subjects')
            .then(response => response.json())
            .then((response) => {
                this.setState(() => {
                    return {subjects: response}
                })

            })
            .catch(err => console.log(err));        
    }

    setThreads = async () => {
        await fetch('/api/forum/threads')
            .then(response => response.json())
            .then((response) => {
                this.setState(() => {
                    return {threads: response}
                })

            })
            .catch(err => console.log(err));        
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
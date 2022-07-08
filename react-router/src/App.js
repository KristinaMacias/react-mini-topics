import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch
} from 'react-router-dom';


export default function App() {

  //post objects stored in an array
  const posts = [
    {
      id: 1,
      title: 'my first post',
      content: 'This is my first post'
    },
    {
      id: 2,
      title: 'checking in',
      content: 'yesterday was a good day, looking forward to another'
    },
    {
      id: 3,
      title: 'vacation time',
      content: 'finally time to go on vacation',
    }
  ];


  return (
    <Router>
      <div>
        <ul>
          <li>
            {/* link will change url, but not the actual view */}
            <Link to="/">Home</Link> 
          </li>
          <li>
            {/* link will change url, but not the actual view */}
            <Link to="/friends">Friends</Link> 
          </li> 
          <li>
            {/* link will change url, but not the actual view*/}
            <Link to="/posts">Posts</Link> 
          </li>
        </ul>
        {/* Switch */}
        <Switch>
          {/* Route is going to render another view */}
          <Route path="/posts">
            {/* Pass in a Post component with props created above */}
            <Posts posts={posts} />
          </Route>
          <Route path="/friends">
            {/* Pass in Friends component with props created here */}
            <Friends names={['Kristina', 'Victora', 'Nick', 'Sara']} />
          </Route>
          <Route path="/home">
            {/* Pass in a Home component */}
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  )

}

// Create a home functional component
function Home() {
  return (
    <div>
        <h2>Home</h2>
        <h3>Test</h3>
    </div>

  )
}

function Friends(props) {
  const {names} = props;
  return (
    <div>
      <ul>
        {names. map((friend, index) => (
          <li key={index}>{friend}</li>
        ))}
      </ul>
    </div>
  )
}

function Posts({ posts }) {
  // create a variable to access useRouteMatch easier
  const match = useRouteMatch();
  //create a variable for the post id
  const findPostById = (id) => 
    posts.filter((post) => post.id == id)[0];
  return (
    <div>
      <h2>Posts</h2>
      <ul>
       {/* map posts to a list and create a link for reach post */}
        {posts.map((post, index) => {
        return (
          <li key={index}>
            {/* Link to the post content? */}
            {/* match.url returns the current url we are at / that post's id */}
            <Link to={`${match.url}/${post.id}`}>
              {post.title}
            </Link>
          </li>
        );
      })}
      </ul>
      <Switch>
        <Route
          path ={`${match.path}/:postId`}
          render={(props) => (
            <Post
            {...props}
            data={findPostById(props.match.params.postId)}
            />
          )}
          />
          <Route path={match.path }>
            <h3>Please select a post</h3>
          </Route>

      </Switch>
    </div>
  )
}

function Post(props) {
  const {data} = props;
  return (
    <div>
      <h3>{data.title}</h3>
      <h4>{data.content}</h4>
    </div>
  )
}
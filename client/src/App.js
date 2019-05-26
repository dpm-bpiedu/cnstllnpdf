import React from 'react';
import { Route, Link } from 'react-router-dom';
//import firebase from './config';

const works = [
  {
    name: 'All',
    id: 'work-001',
    description: 'all of the works',
    resources: [
      {
        name: 'all abstract',
        id: 'all-abstact'
      },
      {
        name: 'all wildlife',
        id: 'all-wildlife'
      }, 
      {
        name: 'all portrait',
        id: 'all-portrait'
      }          
    ]
  },
  {
    name: 'Sculpture',
    id: 'work-002',
    description: 'sculpture works of art',
    resources: [
      {
        name: 'abstract sculpture',
        id: 'sculpture-abstact'
      },
      {
        name: 'wildlife sculpture',
        id: 'sculpture-wildlife'
      }, 
      {
        name: 'portrait sculpture',
        id: 'sculpture-portrait'
      }        
    ]
  },
  {
    name: 'Painting',
    id: 'work-003',
    description: 'painting works of art',
    resources: [
      {
        name: 'abstract painting',
        id: 'painting-abstact'
      },
      {
        name: 'wildlife painting',
        id: 'painting-wildlife'
      }, 
      {
        name: 'portrait painting',
        id: 'painting-portrait'
      }        
    ]
  },  
  {
    name: 'Drawing',
    id: 'work-004',
    description: 'drawing works of art',
    resources: [
      {
        name: 'abstract drawing',
        id: 'painting-abstact'
      },
      {
        name: 'wildlife drawing',
        id: 'painting-wildlife'
      }, 
      {
        name: 'portrait drawing',
        id: 'painting-portrait'
      }        
    ]
  }   
]

// components
const Home = () => {
  return (
    <div><h1>Home</h1></div>
  )
}

const Work = ({ match }) => {
  const work = works.find((elem) => {
    return elem.id === match.params.workId
  });

  return (
    <div>
      <h3>{work.name}</h3>
      <p>{work.description}</p>

      <ul>
        {work.resources.map((sub) => (
         <li key={sub.id}>
           <Link to={`${match.url}/${sub.id}`}>{sub.name}</Link>
         </li> 
        ))}
      </ul>
      
    </div>
  )
}

const Works = ({ match }) => {
  return (
    <div>
      <h2>Works</h2>
      <ul>
        {
          works.map(({ name, id }) => (
            <li key={id}>
              <Link to={`${match.url}/${id}`}>{name}</Link>
            </li>
          ))
        }

      </ul>

      <hr/>

      <Route path={`${match.path}/:workId`} component={Work}/>


      </div>
  )
}




class App extends React.Component {


  render() {

      return (
      <div>
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/works'>Works</Link></li>
        </ul>
        <hr/>
        <h1>cnstllndpf </h1>

        <Route exact path='/' component={Home}/>
        <Route path='/works' component={Works}/>
    


      </div>
    );
  }
}

export default App;

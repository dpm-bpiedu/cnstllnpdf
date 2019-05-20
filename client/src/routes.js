const routes = [
  {private: false, name: 'home', url: '/', exact: true},
  {private: true, name: 'instructions', url: '/private', exact: true},
  {private: false, name: 'log in', url: '/login', exact: false},
  {private: false, name: 'log out', url: '/logout', exact: false} 
];

export default routes;
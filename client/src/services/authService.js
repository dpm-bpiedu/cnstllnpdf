import Cookies from 'universal-cookie';

const cookies = new Cookies();

const authService = {

  isAuthenticated() {
    return cookies.get('auth') === 'true';
  },

  signIn(cb) {
    cookies.set('auth', true, {path: '/'});
  },

  signOut(cb) {
    cookies.set('auth', false, {path: '/'});
  }

};

export default authService;


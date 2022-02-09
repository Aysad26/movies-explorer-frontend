import handleOriginalResponse from "./utils";

class Auth {
  constructor(options) {
    this.baseUrl = options.baseUrl;
  }

  register = ({name, email, password}) => {
    return fetch(`${this.baseUrl}/signup`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({name, email, password})
    })
      .then(handleOriginalResponse)
      .then(data => {
        if (data.token) {
          localStorage.setItem('jwt', data.token);
          return data;
        }
      })
  }


  authorize = (email, password) => {
    return fetch(`${this.baseUrl}/signin`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({password, email})
    })
      .then(handleOriginalResponse)
      .then(data => {
        if (data.token) {
          localStorage.setItem('jwt', data.token);
          return data;
        }
      })
  }

  getContent() {
    return fetch(this._baseUrl, {
      headers: {
        authorization: this._token,
      },
      credentials: 'include',
    })
    .then(res => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Ошибка: ${res.status}`);
    })
  }

}

export const auth = new Auth({
  baseUrl: 'http://api.mesto.aysad26.nomoredomains.work',
})

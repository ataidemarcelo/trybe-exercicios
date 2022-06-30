import React, { Component }  from "react";

class RandomUser extends Component {
  constructor() {
    super();

    this.fetchUser = this.fetchUser.bind(this)

    this.state = {
      user: undefined,
      loading: true
    }
  }

  componentDidMount() {
    this.fetchUser();
  }

  shouldComponentUpdate(preevProps, prevState) {
    if (!prevState.loading && prevState.user.dob.age >= 50) return false
    return true;
  }

  async fetchUser() {
    this.setState(
      { loading: true },
      async () => {
        try {
          const response = await fetch('https://api.randomuser.me/');
          const data = await response.json();
          console.log(data);
          setTimeout(() => {
            this.setState({
              loading: false,
              user: data.results[0]
            })
          }, 1000);
        } catch (error) {
          console.log('Error FetchUser: ',error);
        }
      }
    );
  }


  render() {
    const { loading, user } = this.state;
    
    if (loading) return <div>Loading...</div>

    const { title, first, last } = user.name;
    const fullName = `${title} ${first} ${last}`;

    return (
      <>
        <h1>RandomUser</h1>
        <h2>{fullName}</h2>
        <p>Idade: {user.dob.age}</p>
        <img src={user.picture.medium} alt={fullName} />
        <p>E-mail: {user.email}</p>
      </>
    );
  }
}

export default RandomUser;

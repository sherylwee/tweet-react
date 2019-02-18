class User extends React.Component {
  constructor() {
    super();
  }

  render() {
    var user = this.props.user;
    var datetime = this.props.datetime;

    return (
      <p> {user.name} @{user.screen_name} {datetime}</p>
    )
  }
}

class Text extends React.Component {
  constructor() {
    super();
  }

  render() {
    var text = this.props.text;

    return (
      <p>{text}</p>
    )
  }
}

class Picture extends React.Component {
  constructor() {
    super();
  }
  render() {
    var profile = this.props.picture.profile_image_url;
    return (
      <img src={profile} />
    )
  }
}

class Button extends React.Component {
  constructor() {
    super();
  }
  render() {
    var retweet = this.props.retweet;
    var favorite = this.props.favorite;
    return (
      <p>retweet: {retweet} favorite: {favorite}</p>
    )
  }
}


class Twitter extends React.Component {
  constructor() {
    super();
  }
  render() {
    var tweets = this.props.tweets.map(tweet => {
      return (
        <div tweet={tweet.id}>
          <Picture picture={tweet.user} />
          <User user={tweet.user} datetime={tweet.created_at} />
          <Text text={tweet.text} />
          <Button retweet={tweet.retweet_count} favorite={tweet.favorite_count} />
        </div>
      )
    })

    return (
      <div>
        {tweets}
      </div>
    )
  }
}

ReactDOM.render(
  <div>
    <Twitter tweets={tweets} />
  </div>,
  document.getElementById('root')
);




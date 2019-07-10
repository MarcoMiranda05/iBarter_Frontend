import React from "react";
import Tag from "../components/Tag";
import { withRouter } from "react-router";

const API = "https://ibarter.herokuapp.com/";

class ItemPage extends React.Component {
  state = {
    item: {}
  };

  componentDidMount() {
    fetch(`${API}api/items/${this.props.id}`)
      .then(resp => resp.json())
      .then(data => {
        console.log(data);
        this.setState({ item: data });
      });
  }

  componentDidMount() {
    fetch(`${API}api/items/${this.props.id}`)
      .then(resp => resp.json())
      .then(data => {
        console.log(data);
        this.setState({ item: data });
      });
  }

	makeOffer = () => {
		this.props.history.push(`/make-offer/${this.state.item.id}`);
	}

	render() {
		const { item } = this.state;
		const tags = [
			"tag",
			"wah",
			"gsag",
			"safgdgsafasg",
			"gdasf",
			"tag",
			"wah",
			"gsag",
			"safgdgsafasg",
			"gdasf"
		];
		return (
			<>
				<h1>{item.name}</h1>
				<div className="left">
					{item.image_urls ? (
						<img id="main-img" src={`${API}${item.image_urls[0]}`} />
					) : (
						""
					)}
				</div>
				<div className="right">
					<h3>Description</h3>
					<p>{item.description}</p>
					<h3>Condition</h3>
					<p>{item.condition}</p>
					<h3>Tags</h3>
					<div id="tag-container">
						{tags.map((tag, i) => {
							return <Tag tag={tag} key={i} />;
						})}
					</div>
					<div id="button-container">
						{
							this.state.item.user_id == this.props.currentUser.id ? "" : <button onClick={this.makeOffer}>Make Offer</button>
						}
					</div>
				</div>
			</>
		);
  }
}

export default withRouter(ItemPage);

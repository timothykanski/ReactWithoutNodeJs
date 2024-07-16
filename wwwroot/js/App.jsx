class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: [
        {
          id: 1,
          title: "First Card",
          description: "This is a description of the first card.",
          image: "../../images/150.png",
          width: 300,
          height: 400,
          fields: ['Field 1', 'Field 2']
        }
      ]
    };
  }

  componentDidMount() {
    console.log("App onComponentDidMount");
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("App onComponentDidUpdate");

    if(prevState.cards !== this.state.cards) {
      console.log("Cards now contains:", this.state.cards);
    };
  }


  render() {
    return (
      <div>

        {/* Title */}
        <h1>My React App</h1>

        {/* Buttons */}
        <div className="button-container">
          <button onClick={this.updateFirstCard}>Update First Card</button>
        </div>

        {/* Cards Widget */ }
        {this.state.cards && this.state.cards.length > 0 && this.state.cards.map(card => (
          <Widget key={card.id} card={card} sendCardToServer={this.sendCardToServer} />
        ))}

      </div>
    );
  }



  addCard = (text) => {

    console.log(text);

    const newCard = {
      id: this.state.cards.length + 1,
      title: "Server Response",
      description: text,
      width: 300,
      height: 200,
      fields: []
    };

    this.setState({ cards: [...this.state.cards, newCard] });
  }

  updateFirstCard = () => {
    console.log("App updateFirstCard");
    const updatedCard = { ...this.state.cards[0], title: "Updated Card", description: "Description of Updated Card" };
    let cardsCopy = [...this.state.cards];
    cardsCopy[0] = updatedCard;
    this.setState({ cards: cardsCopy });
  }

  removeCards = () => {
    console.log("App removeCards");
    this.setState({ cards: [] });
  }



  sendCardToServer = (card) => {
    console.log("App sendCardToServer", card);
    console.table(card.fields);
    fetch('/Home/SelectCard', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(card)
    })
      .then(response => response.json())
      .then(data => {
        this.addCard("Server Response: [" + data.message + "]");
      })
      .catch(error => {
        alert("An error occurred. Please try again.");
      });
  }

}

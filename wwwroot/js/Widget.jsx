class Widget extends React.Component {

  componentWillUnmount() {
    console.log("Widget onComponentWillUnmount");
  }

  render() {
    const { card } = this.props;
    return (
      <div className="widget-card" style={{ width: card.width, height: card.height, border: '1px solid black', margin: '10px', padding: '5px' }}>
        <h2>{card.title}</h2>
        <p>{card.description}</p>
        {card.image && <img src={card.image} alt={card.title} />}
        <ul>
          {card.fields.map((field, index) => <li key={index}>{field}</li>)}
        </ul>
        <button onClick={this.handleButtonClick}>Send Card to Server</button>
      </div>
    );
  }

  handleButtonClick = () => {
    this.props.sendCardToServer(this.props.card);
  }

}

import { nanoid } from 'nanoid';
import { Component } from 'react';

export class ContactForm extends Component {
  state = {
    contacts: [],
    name: '',
  };

  onNameChange = ({ target }) => {
    this.setState({ name: target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log(nanoid());
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={this.onNameChange}
          value={this.state.name}
        />
        <button type="submit">Add contact</button>
      </form>
    );
  }
}

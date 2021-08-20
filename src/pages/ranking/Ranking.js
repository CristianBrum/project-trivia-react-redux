import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './ranking.css';
import { ReactComponent as Logo } from '../../images/trophy-solid.svg';

class Ranking extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ranking: false,
    };
    this.handleLocalStorage = this.handleLocalStorage.bind(this);
  }

  componentDidMount() {
    this.handleLocalStorage();
  }

  handleLocalStorage() {
    const currentRank = JSON.parse(localStorage.getItem('ranking'));
    this.setState(() => ({
      ranking: currentRank,
    }));
  }

  class(index) {
    if (index === 0) {
      return 'first-place';
    }
    if (index === 1) {
      return 'second-place';
    }
    if (index === 2) {
      return 'third-place';
    }
    return 'unranked';
  }

  render() {
    const { ranking } = this.state;
    return (
      <section className="section-ranking">
        <h2 data-testid="ranking-title">Ranking</h2>
        <table>
          <tbody>
            { ranking ? ranking.sort((a, b) => b.score - a.score)
              .map(({ name, score, picture }, index) => (
                <tr
                  className={ this.class(index) }
                  style={ { width: `${score * 2}px` } }
                  key={ index }
                >
                  <td><img src={ picture } alt="profile" /></td>
                  <td className="name" data-testid={ `player-name-${index}` }>{name}</td>
                  <td
                    className="score"
                    data-testid={ `player-score-${index}` }
                  >
                    {`${score} Pontos`}
                  </td>
                  {index === 0 && (
                    <td><Logo className="gold" /></td>)}
                  {index === 1 && (
                    <td><Logo className="silver" /></td>)}
                  {index === 2 && (
                    <td><Logo className="bronze" /></td>)}
                </tr>
              )) : null }
          </tbody>
        </table>
        <Link to="/">
          <button
            onClick="refresh"
            className="button-home"
            type="button"
            data-testid="btn-go-home"
          >
            Home
          </button>
        </Link>
      </section>
    );
  }
}

export default Ranking;

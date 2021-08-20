import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Header from '../../components/Header';
import './feedback.css';

class Feedback extends Component {
  constructor(props) {
    super(props);
    this.state = {
      totalScore: props.totalScore,
      totalAssertions: props.totalAssertions,
    };
    this.renderFeedback = this.renderFeedback.bind(this);
  }

  renderFeedback() {
    const worstScore = 3;
    const { totalScore, totalAssertions } = this.state;
    if (totalAssertions < worstScore) {
      return (
        <div>
          <p data-testid="feedback-text">Podia ser melhor...</p>
          <div className="assertions">
            <p>Você acertou</p>
            <p className="red" data-testid="feedback-total-question">{totalAssertions}</p>
            <p>
              Quest
              {totalAssertions !== 1 ? 'ões!' : 'ão!'}
            </p>
          </div>
          <div className="scores">
            <p>Um total de</p>
            <p className="red" data-testid="feedback-total-score">{totalScore}</p>
            <p>
              Ponto
              {totalScore !== 1 ? 's!' : '!'}
            </p>
          </div>
        </div>
      );
    }
    return (
      <div>
        <div className="assertions">
          <p>Você acertou</p>
          <p className="green" data-testid="feedback-total-question">{totalAssertions}</p>
          <p>
            Quest
            {totalAssertions !== 1 ? 'ões!' : 'ão!'}
          </p>
        </div>
        <div className="scores">
          <p>Um total de</p>
          <p className="green" data-testid="feedback-total-score">{totalScore}</p>
          <p>
            Ponto
            {totalScore !== 1 ? 's!' : '!'}
          </p>
        </div>
      </div>

    );
  }

  render() {
    return (
      <>
        <Header />
        { this.renderFeedback() }
        <div className="feedback-button">
          <Link to="ranking">
            <button className="btn-ranking" type="button" data-testid="btn-ranking">
              VER RANKING
            </button>
          </Link>
          <Link to="/">
            <button
              onClick="refresh"
              className="btn-play-again"
              type="button"
              data-testid="btn-play-again"
            >
              Jogar Novamente
            </button>
          </Link>
        </div>
      </>
    );
  }
}

Feedback.propTypes = {
  totalScore: PropTypes.number,
}.isRequired;

const mapStateToProps = (state) => ({
  totalScore: state.ScoreReducer.totalScore,
  totalAssertions: state.ScoreReducer.totalAssertions,
});

export default connect(mapStateToProps)(Feedback);

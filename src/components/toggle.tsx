import React, { Component } from 'react';
import { genres } from '../mock/movies';

interface ToggleProps {
  activeGenre: string;
  handleToggle: (arg0: string) => void;
}

class Toggle extends Component<ToggleProps> {
  shouldComponentUpdate(nextProps: ToggleProps) {
    const { activeGenre } = this.props;
    if (activeGenre !== nextProps.activeGenre && nextProps.activeGenre !== 'crime') {
      return true;
    }
    return false;
  }

  render() {
    const { activeGenre, handleToggle } = this.props;
    return (
      <div className="ui secondary menu">
        <button
            type="button"
            key="all"
            className={`item${!activeGenre && ' active'}`}
            onClick={() => handleToggle('')}
        >
          all
        </button>
        {
                    genres.map((genre) => (
                      <button
                        type="button"
                        key={genre}
                        className={`item${activeGenre === genre && ' active'}`}
                        onClick={() => handleToggle(genre)}
                      >
                        {`${genre}${genre === 'crime' ? ' (WON\'T CHANGE COLOR WHEN ACTIVE)' : ''}`}
                      </button>
                    ))
                }
      </div>
    );
  }
}

export default Toggle;

import React from 'react';
import PropType from 'prop-types';

class Input extends React.Component {
  render() {
    const { name, value, formType, labelText, onChange } = this.props;
    return (
      <div className={ name }>
        {formType === 'checkbox' ? (
          <div className="checked">
            <label htmlFor={ labelText }>
              <span>{ labelText }</span>
              <input
                id={ labelText }
                type={ formType }
                name={ name }
                className={ name }
                onChange={ onChange }
                checked={ value }
              />
            </label>
          </div>
        )
          : (
            <label htmlFor={ labelText }>
              <span>{ labelText }: </span>
              <input
                id={ labelText }
                type={ formType }
                name={ name}
                className={name}
                onChange={onChange}
                value={value}
                min={0}
              />
            </label>)}
      </div>
    );
  }
}

Input.propTypes = {
  name: PropType.string.isRequired,
  formType: PropType.string.isRequired,
  labelText: PropType.string.isRequired,
  onChange: PropType.func.isRequired,
};

export default Input;
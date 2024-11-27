import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPersonBiking } from '@fortawesome/free-solid-svg-icons';

import Button from './Button';

function SpecialCard({ image, title, price, description, onOrder }) {
  return (
    <div className="special-card" role="article" aria-labelledby={`${title}-label`}>
      <div
        className="special-card-image"
        style={{
          backgroundImage: `url(${image})`,
        }}
        role="img"
        aria-label={`Image of ${title}`}
      />

      <div className="special-card-content">
        <div className="special-card-header">
          <h3 id={`${title}-label`} className="special-card-title">{title}</h3>
          <p className="special-card-price" aria-label={`Price: €${price}`}>€ {price}</p>
        </div>
        <p className="special-card-description">{description}</p>

        <Button
          label="Order a delivery"
          variant="ghost"
          rightIcon={<FontAwesomeIcon icon={faPersonBiking} />}
          className="animate-icon-button"
          onClick={onOrder}
          aria-label={`Order a delivery for ${title}`}
        />
      </div>
    </div>
  );
}

export default SpecialCard;

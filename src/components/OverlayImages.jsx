import React from "react";
import PropTypes from "prop-types";

function OverlayImages({ primaryImg, secondaryImg, primaryAlt, secondaryAlt }) {
  return (
    <div className="image-overlay" role="group" aria-label="Overlayed images">
      <img
        src={primaryImg}
        alt={primaryAlt || "Primary image"}
        className="image image-primary"
        aria-hidden={secondaryImg ? "true" : "false"}
      />
      <img
        src={secondaryImg}
        alt={secondaryAlt || "Secondary image"}
        className="image image-secondary"
        aria-hidden={primaryImg ? "true" : "false"}
      />
    </div>
  );
}

OverlayImages.propTypes = {
  primaryImg: PropTypes.string.isRequired,
  secondaryImg: PropTypes.string.isRequired,
  primaryAlt: PropTypes.string,
  secondaryAlt: PropTypes.string,
};

export default OverlayImages;

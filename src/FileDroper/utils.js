import mime from "mime";
import PropTypes from "prop-types";
/**
 *
 * @param {string} type
 * @param {Array} allowedExtension
 * @returns
 */
function acceptFileExtension(type, allowedExtension) {
  const generalType = type.toLowerCase().split("/")[0];

  const extention = `.${mime.getExtension(type)}`;
  const isAllowed =
    allowedExtension.includes(extention) ||
    allowedExtension
      .map((res) => res.toLowerCase().split("/")[0])
      .includes(generalType);
  return isAllowed;
}
acceptFileExtension.propTypes = {
  type: PropTypes.string.isRequired,
  allowedExtensions: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default acceptFileExtension;

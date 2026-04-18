import niched from './niche.js';
export default (req, res) => {
  req.query = { ...req.query, niche: 'plumber' };
  return niched(req, res);
};

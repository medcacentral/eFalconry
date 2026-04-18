import niched from './niche.js';
export default (req, res) => {
  req.query = { ...req.query, niche: 'landscaping' };
  return niched(req, res);
};

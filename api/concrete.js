import niched from './niche.js';
export default (req, res) => {
  req.query = { ...req.query, niche: 'concrete' };
  return niched(req, res);
};

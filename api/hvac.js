import niched from './niche.js';
export default (req, res) => {
  req.query = { ...req.query, niche: 'hvac' };
  return niched(req, res);
};

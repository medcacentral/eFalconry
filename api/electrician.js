import niched from './niche.js';
export default (req, res) => {
  req.query = { ...req.query, niche: 'electrician' };
  return niched(req, res);
};

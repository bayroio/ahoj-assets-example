// pages/api/next.js

import next from '../../next.json';

export default (req, res) => {
  res.status(200).json(next);
};
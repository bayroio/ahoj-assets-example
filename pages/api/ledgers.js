// pages/api/ledgers.js

import ledgers from '../../ledgers.json';

export default (req, res) => {
  res.status(200).json(ledgers);
};
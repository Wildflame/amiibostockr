var _ = require('lodash');

var ASIN = [
  'B00Q6A57J2',
  'B00O9QCJFK',
  'B00SSU692M',
  'B00O9QC5N6',
  'B00N8PBOFO',
  'B00N8PBS0A',
  'B00Q6A571A',
  'B00QGBNLUI',
  'B00N8PBZSA',
  'B00N8PBQDE',
  'B00O9QC5R2',
  'B00Q6A578I',
  'B00SSU6936',
  'B00O9QC5Y0',
  'B00N8PBGV6',
  'B00N8PC142',
  'B00QGBNLU8',
  'B00QGBNMW0',
  'B00SSU6940',
  'B00SSU69DG',
  'B00N8PBJQ8',
  'B00N8PBYK4',
  'B00O9QCHDO',
  'B00SSU693Q',
  'B00Q6A56C0',
  'B00N8PBTVS',
  'B00Q6A56DY',
  'B00QGBNLUS',
  'B00QGBNLTO',
  'B00Q6A57C4',
  'B00N8PBXFK',
  'B00SSU65QC',
  'B00N8PBVHU',
  'B00N8PBMK6',
  'B00O9QC5PY'
];

module.exports = {

  ASIN        : ASIN,
  ASIN_CHUNKS : _.chunk(ASIN, 10),
  DOMAIN      : 'webservices.amazon.co.uk',

  CREDS : {
    awsId: process.env.AWSIDUS,
    awsSecret: process.env.AWSSECRETUS,
    awsTag: 'kings0b-21'
  }

};

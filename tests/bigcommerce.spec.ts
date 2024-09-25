import generateCMPTests from "../playwright/runner";

generateCMPTests('bigcommerce', [
  'https://france.muji.eu/stationery/pens-and-pencils/pen-sets'
], {});

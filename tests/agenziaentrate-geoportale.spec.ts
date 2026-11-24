import generateCMPTests from '../playwright/runner';

generateCMPTests('agenziaentrate-geoportale', [
    'https://geoportale.cartografia.agenziaentrate.gov.it/age-inspire/srv/ita/catalog.search#/home',
]);

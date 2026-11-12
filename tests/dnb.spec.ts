import generateCMPTests from '../playwright/runner';

const urls = ['https://sbanken.no/', 'https://www.dnb.no/'];

generateCMPTests('dnb', urls);

import generateCMPTests from '../playwright/runner';

generateCMPTests('landgate', ['https://www.landgate.wa.gov.au/', 'https://www.spatialwa.wa.gov.au/'], {});

import generateCMPTests from '../playwright/runner';

generateCMPTests('classification-gov-au', ['https://www.classification.gov.au/'], {
    onlyRegions: ['AU'],
});

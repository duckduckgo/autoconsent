import generateCMPTests from '../playwright/runner';

generateCMPTests('sejm.gov.pl', ['https://www.sejm.gov.pl/'], {
    onlyRegions: ['PL'],
});

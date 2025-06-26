import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_en.adiglobaldistribution.ca_n0b', ['https://www.en.adiglobaldistribution.ca/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['CA'],
});

import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_hertz.ca_fhl', ['https://www.hertz.ca/rentacar/reservation/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CA'],
});

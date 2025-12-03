import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_natureconservancy.ca_3pp', ['https://www.natureconservancy.ca/en/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['CA'],
});

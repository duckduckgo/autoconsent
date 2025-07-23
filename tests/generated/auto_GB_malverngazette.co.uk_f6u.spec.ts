import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_malverngazette.co.uk_f6u', ['https://www.malverngazette.co.uk/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['GB'],
});

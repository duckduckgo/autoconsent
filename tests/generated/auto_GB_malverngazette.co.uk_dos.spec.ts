import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_malverngazette.co.uk_dos', ['https://www.malverngazette.co.uk/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['GB'],
});

import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_southwalesargus.co.uk_5tu', ['https://www.southwalesargus.co.uk/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['GB'],
});

import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_english-heritage.org.uk_81f', ['https://www.english-heritage.org.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});

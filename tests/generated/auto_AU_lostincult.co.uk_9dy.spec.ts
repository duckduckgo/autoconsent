import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_lostincult.co.uk_9dy', ['https://www.lostincult.co.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['AU'],
});

import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_strato-hosting.co.uk_8ry', ['https://www.strato-hosting.co.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});

import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_blanchardsbailey.co.uk_max', ['https://blanchardsbailey.co.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});

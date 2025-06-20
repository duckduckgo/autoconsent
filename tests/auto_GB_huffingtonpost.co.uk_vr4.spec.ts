import generateCMPTests from '../playwright/runner';
generateCMPTests('auto_GB_huffingtonpost.co.uk_vr4', ['https://www.huffingtonpost.co.uk/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['GB'],
});

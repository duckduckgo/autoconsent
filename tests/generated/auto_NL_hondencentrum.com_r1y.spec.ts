import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_hondencentrum.com_r1y', ['https://www.hondencentrum.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});

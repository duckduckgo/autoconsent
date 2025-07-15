import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_stoneacre.co.uk_73c', ['https://www.stoneacre.co.uk/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['GB'],
});

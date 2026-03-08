import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_cryptidz.fandom.com_eli', ['https://cryptidz.fandom.com/wiki/Cryptid_Wiki'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['US'],
});

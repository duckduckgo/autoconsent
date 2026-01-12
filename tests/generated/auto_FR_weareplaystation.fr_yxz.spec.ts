import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_weareplaystation.fr_yxz', ['https://www.weareplaystation.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});

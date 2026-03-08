import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_dubbing.fandom.com_btr', ['https://dubbing.fandom.com/wiki/Dubbing_Wikia'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['US'],
});

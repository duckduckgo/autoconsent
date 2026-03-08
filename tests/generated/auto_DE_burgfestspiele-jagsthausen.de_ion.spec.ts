import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_burgfestspiele-jagsthausen.de_ion', ['https://burgfestspiele-jagsthausen.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});

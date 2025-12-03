import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_v-mn.de_6w3', ['https://www.v-mn.de/privatkunden.html'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});

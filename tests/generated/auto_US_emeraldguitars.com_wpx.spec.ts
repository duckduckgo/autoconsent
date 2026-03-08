import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_emeraldguitars.com_wpx', ['https://emeraldguitars.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['US'],
});

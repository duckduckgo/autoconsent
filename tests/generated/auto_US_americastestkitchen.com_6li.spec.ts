import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_americastestkitchen.com_6li', ['https://www.americastestkitchen.com/browse'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['US'],
});

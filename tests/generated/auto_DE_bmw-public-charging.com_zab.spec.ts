import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_bmw-public-charging.com_zab', ['https://bmw-public-charging.com/web/de/bmw-de'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});

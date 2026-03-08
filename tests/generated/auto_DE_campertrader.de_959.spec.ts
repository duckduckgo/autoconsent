import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_campertrader.de_959', ['https://campertrader.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});

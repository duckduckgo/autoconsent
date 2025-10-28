import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_aliexpress.com_n59', ['https://de.aliexpress.com/?gatewayAdapt=glo2deu'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});

import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_rechtsanwalt.com_pfn', ['https://www.rechtsanwalt.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});

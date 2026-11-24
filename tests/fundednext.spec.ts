import generateCMPTests from '../playwright/runner';

generateCMPTests('fundednext', ['https://fundednext.com/'], {
    testOptIn: true,
    onlyRegions: ['GB', 'DE', 'FR'],
});

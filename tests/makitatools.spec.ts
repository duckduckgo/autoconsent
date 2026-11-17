import generateCMPTests from '../playwright/runner';

generateCMPTests('makitatools', ['https://www.makitatools.com/products/details/DRC300PT'], {
    onlyRegions: ['US'],
});

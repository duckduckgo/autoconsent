import generateCMPTests from '../playwright/runner';

generateCMPTests('archambault', ['https://www.archambault.ca/'], {
    onlyRegions: ['CA'],
});

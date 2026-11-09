import generateCMPTests from '../playwright/runner';

generateCMPTests('archambault', ['https://www.archambault.ca/', 'https://www.renaud-bray.com/'], {
    onlyRegions: ['CA'],
});

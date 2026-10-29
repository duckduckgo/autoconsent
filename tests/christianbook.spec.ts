import generateCMPTests from '../playwright/runner';

// US privacy notice; EU visitors get a separate YES/NO cookie wall
generateCMPTests('christianbook', ['https://www.christianbook.com/'], {
    onlyRegions: ['US'],
});

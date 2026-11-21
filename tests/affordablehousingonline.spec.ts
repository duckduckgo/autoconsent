import generateCMPTests from '../playwright/runner';

generateCMPTests('affordablehousingonline', ['https://affordablehousingonline.com/'], {
    skipRegions: ['US'],
});

generateCMPTests('affordablehousingonline', ['https://affordablehousingonline.com/'], {
    skipRegions: ['US'],
    mobile: true,
});

import generateCMPTests from '../playwright/runner';

generateCMPTests('reviq', ['https://www.metatft.com/', 'https://tfthandbook.com/', 'https://prosettings.net/', 'https://tomato.gg/'], {
    skipRegions: ['US'],
});

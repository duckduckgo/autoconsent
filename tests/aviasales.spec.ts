import generateCMPTests from '../playwright/runner';

generateCMPTests('aviasales', ['https://www.aviasales.kz/'], {
    skipRegions: ['AU'],
});

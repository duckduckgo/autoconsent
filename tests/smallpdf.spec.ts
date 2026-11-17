import generateCMPTests from '../playwright/runner';

generateCMPTests('smallpdf', ['https://smallpdf.com/', 'https://smallpdf.com/de/pdf-zu-word'], {
    skipRegions: ['US'],
});

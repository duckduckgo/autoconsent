import generateCMPTests from "../playwright/runner";

generateCMPTests('Complianz categories', [
    'https://www.expatica.com/de',
    'https://carnavaldecadiztv.com/',
], {
    skipRegions: ['GB']
});

generateCMPTests('Complianz categories', [
    'https://hypotheses.org/',
], {
    skipRegions: ['US', 'GB']
});

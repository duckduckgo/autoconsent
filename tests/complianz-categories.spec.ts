import generateCMPTests from "../playwright/runner";

generateCMPTests('Complianz categories', [
    'https://www.expatica.com/de',
    'https://carnavaldecadiztv.com/',
    'https://hypotheses.org/',
], {
    skipRegions: ['GB']
});

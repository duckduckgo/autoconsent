import generateCMPTests from '../playwright/runner';

generateCMPTests('uw-madison-cookieconsent', [
    'https://lafollette.wisc.edu/news/new-research-reveals-longevity-gains-slowing-life-expectancy-of-100-unlikely/',
    'https://www.wisc.edu/',
    'https://geography.wisc.edu/',
]);

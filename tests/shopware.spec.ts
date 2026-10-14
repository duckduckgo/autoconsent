import generateCMPTests from '../playwright/runner';

const urls = [
    'https://www.platinlux.com/en/s8-55056/floating-globe-smokey-e27-led-bulb-by-segula',
    'https://stoffkontor.eu/',
    'https://www.mdf-verpackungen.de/',
    'https://www.noblewine.de/',
    'https://www.trauttmansdorff.it/',
];

generateCMPTests('shopware', urls, { mobile: false });
generateCMPTests('shopware', urls, { mobile: true });

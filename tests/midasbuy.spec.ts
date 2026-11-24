import generateCMPTests from '../playwright/runner';

const urls = ['https://www.midasbuy.com/'];

generateCMPTests('midasbuy', urls, { mobile: false });
generateCMPTests('midasbuy', urls, { mobile: true });

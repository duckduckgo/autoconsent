import generateCMPTests from '../playwright/runner';

const urls = ['https://login.aliorbank.pl/', 'https://www.aliorbank.pl/'];

generateCMPTests('eccmm', urls, { mobile: true });
generateCMPTests('eccmm', urls, { mobile: false });

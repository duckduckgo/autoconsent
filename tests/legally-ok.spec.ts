import generateCMPTests from '../playwright/runner';

const urls = ['https://www.persoenlich.com/', 'https://www.schulthess-klinik.ch/', 'https://www.rapid.ch/', 'https://www.foodaktuell.ch/'];

generateCMPTests('legally-ok', urls, { mobile: true });
generateCMPTests('legally-ok', urls, { mobile: false });

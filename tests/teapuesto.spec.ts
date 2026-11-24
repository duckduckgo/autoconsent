import generateCMPTests from '../playwright/runner';

const urls = ['https://www.teapuesto.pe/', 'https://mobile.teapuesto.pe/'];

generateCMPTests('teapuesto', urls, { mobile: false });
generateCMPTests('teapuesto', urls, { mobile: true });

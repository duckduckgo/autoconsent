import generateCMPTests from '../playwright/runner';

generateCMPTests('sicredi-frame', ['https://ibpj.sicredi.com.br/'], {
    testSelfTest: false,
});

// Akamai shows "Access Denied" to GB and DE test browsers on this host
generateCMPTests('sicredi-frame', ['https://ibpf.sicredi.com.br/'], {
    testSelfTest: false,
    onlyRegions: ['US'],
});

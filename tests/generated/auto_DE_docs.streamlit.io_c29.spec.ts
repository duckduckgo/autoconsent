import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_docs.streamlit.io_c29', ['https://docs.streamlit.io/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});

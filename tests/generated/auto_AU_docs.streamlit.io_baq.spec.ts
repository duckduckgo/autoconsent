import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_docs.streamlit.io_baq', ['https://docs.streamlit.io/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['AU'],
});

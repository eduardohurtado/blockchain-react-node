const english = {
    chain: {
        props: {
            height: 'Chain height'
        }
    },
    block: {
        props: {
            height: 'Block height'
        }
    },
    process: {
        finalizedPrint: 'Print finalized'
    },
    errors: {
        invalidChain: 'The chain is not valid',
        invalidBlock: 'The block is not valid',
        errorOnGetBlockData: 'Cannot get the block data',
        chainInitialized: 'The chain is already initialized',
        chainIsNotInitialized: 'The chain has to be initialized before mine a block',
        genesysBlockAlreadyCreated: 'The genesys block type is unique, and is already created'
    }
};

module.exports = english;

/* eslint-disable max-len*/

export default {
    locale: {
        current_language_name: 'English',
    },
    pages: {
        staking: {
            note_unstaking_period: 'Please note that there is an unstaking period of {period}',
            sign_in: 'Please sign in first to be able to interact with our staking interface',
            claim_tlos: 'Claim TLOS',
            add_stlos_to_metamask: 'Launch MetaMask dialog to add sTLOS',
            metamask_fox_logo: 'MetaMask fox logo',
            cancel: 'Cancel',
            stake_tlos_confirm: 'Continuing will stake TLOS in exchange for sTLOS. ' +
            'sTLOS can be redeemed for TLOS at any time using the Unstake tab.',
            stake_tlos_confirm_2a: 'After TLOS has been unstaked, it will be locked for a period of', /* unstakePeriodPretty...*/
            stake_tlos_confirm_2b: /*...unstakePeriodPretty */ 'after which it can be withdrawn to your account from the Withdraw tab.',
            stake_tlos_confirm_3: 'Would you like to proceed?',
            stake_tlos: 'Stake TLOS',
            stake_tlos_subheader: 'Staking your TLOS to sTLOS grants you access to a steady income and various DeFi applications, ' +
            'further increasing yield. As the reward pool increases, the TLOS to sTLOS conversion rate will change ' +
            'over time. Therefore, the amount of sTLOS received is smaller than the staked TLOS. Rewards will be ' +
            'auto-compounded. No further action is required.',
            receive_stlos: 'Receive sTLOS',
            available: '{balanceTlos} Available',
            insufficient_tlos_balance: 'Insufficient TLOS balance to stake',
            login_using_an_evm_wallet: 'Login using an EVM wallet',
            wallet_not_connected: 'Wallet not connected',
            click_to_input_full_wallet_balance: 'Click to input full wallet balance\n\n' +
            'Balance displayed is reduced by 1 TLOS to keep your account actionable.\n' +
            'Precise balance (less approximate gas fees):\n' +
            '{prettyBalance} TLOS',
            loading: 'Loading...',
            get_more_tlos: 'Get more TLOS',
            connect_wallet: 'Connect Wallet',
            minutes: 'minutes',
            hours: 'hours',
            days: 'days',
            unstake: 'Unstake',
            stake: 'Stake',
            withdraw: 'Withdraw',
            telos_evm_staking: 'Telos EVM Staking',
            stake_tlos_earn_interest: 'Stake TLOS for sTLOS to earn interest from the staking rewards pool',
            staked: 'Staked',
            unstaked: 'Unstaked',
            tooltip_1: 'APY: Annual Percentage Yield\n\nThe annual rate of return after taking compound interest into account.\n\n' +
            'Interest is compounded approximately every 30 minutes. The percentage rate is not fixed, meaning that ' +
            'it will change over time with the total amount of TLOS staked across Telos EVM and Native. ' +
            'Rewards are disbursed from a community rewards pool into the sTLOS contract.',
            tooltip_2: 'TVL: Total Value Locked\n\nThe current value, in TLOS, of all assets held in the sTLOS ' +
            '(Staked TLOS) smart contract, i.e. the sum of all TLOS staked on the Telos EVM at this moment.',
            tooltip_3: 'Staked\n\n' +
            'The total staked amount associated with the logged-in account, i.e. ' +
            'your sTLOS token balance, along with its value in TLOS',
            tooltip_4: 'Unstaked\n\n' +
            'The total value of TLOS which you have unstaked, both locked and unlocked.\n\n' +
            'When you unstake\u2014i.e. redeem\u2014some value of sTLOS, the equivalent amount of ' +
            'TLOS is sent into escrow ("locked") for {unlockPeriod}; during this time, ' +
            'you cannot interact with this TLOS.\n\n' +
            'After the unlock period has elapsed, you can withdraw your unlocked TLOS from the Withdraw tab ' +
            'on this page, at which point it will be added to your account TLOS balance.',
            confirm_unstake_1a: 'Continuing will redeem sTLOS in exchange for TLOS. ' +
            'Unstaked TLOS will remain locked for a period of', /* unstakePeriodPretty...*/
            confirm_unstake_1b: /*...unstakePeriodPretty */ 'after which it can be withdrawn to your account from the Withdraw tab',
            confirm_unstake_2a: 'Heads up, you may unstake ', /* remainingDeposits...*/
            confirm_unstake_2b: /*...remainingDeposits */ 'more times before ' +
            'you reach the maximum concurrent unstake actions. When you reach the maximum, you will need to withdraw' +
            'unlocked TLOS to continue unstaking. If you don\'t have any withdrawable TLOS at that time, you must' +
            'wait until the lock duration has elapsed before you can withdraw unlocked TLOS and unstake more sTLOS. -',
            unstake_stlos_for_tlos: 'Unstake sTLOS in exchange for TLOS',
            unstake_stlos: 'Unstake sTLOS',
            receive_tlos: 'Receive TLOS',
            amount: 'Amount',
            time_remaining: 'Time Remaining',
            full_staked_balance_tooltip: 'Click to input full staked balance\n\n' +
            'Precise balance (less approximate gas fees):\n' +
            '{prettyBalance} sTLOS',
            login_using_evm_wallet: 'Login using an EVM wallet',
            max_unstake_transactions_reached: 'You have reached the maximum number of pending unstake transactions, ' +
            'please withdraw available TLOS or wait for pending unstaked TLOS to become withdrawable before making another deposit.',
            click_to_change_time_format: 'Click to change time format',
            unstaking: 'Unstaking',
            available_to_withdraw: 'Available to withdraw',
            withdraw_tlos: 'Withdraw TLOS',
            withdraw_successful: 'Withdraw successful! View Transaction:',
            no_withdrawable_positions: 'No withdrawable positions',
            you_have_unlocked_tlos: 'You have unlocked TLOS!',
            stake_tlos_success: 'Stake successful! View Transaction: ',
            unstake_stlos_success: 'Unstake successful! View Transaction: ',
            deposit_failed: 'Failed to deposit TLOS: { message }',
            redeem_failed: 'Unable to convert STLOS to TLOS: { message }',
            fetch_balance_error: 'Failed to fetch account: { message }',
            fetch_stlos_balance_error: 'Failed to fetch account STLOS balance: { message }',
            fetch_stlos_value_error: 'Failed to fetch account STLOS balance value: { message }',
            fetch_unstaked_balance_error: 'Failed to fetch total unstaked TLOS balance: { message }',
            fetch_unlocked_balance_error: 'Failed to fetch withdrawable STLOS balance: { message }',
            fetch_escrow_deposits_error: 'Failed to fetch escrow deposits: { message }',
            fetch_conversion_rate_error: 'Failed to fetch TLOS->sTLOS conversion rate: { message }',
            fetch_stlos_contract_error: 'Failed to get STLOS contract: { message }',
            fetch_escrow_contract_error: 'Failed to get STLOS contract: { message }',
            fetch_unstake_period_error: 'Failed to retrieve unstaking period: { message }',
            fetch_account_error: 'Failed to fetch account: { message }',
            fetch_stlos_tvl_error: 'Failed to fetch sTLOS TVL: { message }',
            fetch_stlos_apy_error: 'Failed to fetch sTLOS APY: { message }',
            fetch_max_deposits_error: 'Failed to fetch max deposits from escrow contract { message }',
            convert_tlos_to_stlos_error: 'Unable to convert TLOS to STLOS { message }',
            convert_stlos_to_tlos_error: 'Unable to convert STLOS to TLOS { message }',
            unstake_stlos_error: 'Failed to unstake sTLOS { message }',
            withdraw_failed: 'Failed to withdraw unlocked TLOS: { message }',
        },
        issuer: 'Issuer',
        account_not_found: 'We could not find this account',
        approvals: 'Approvals',
        supported_interfaces: 'Known supported interface(s)',
        explore_transactions: 'Explore Transactions',
        recent_transactions: 'Recent transactions',
        telos_evm_explorer: 'Telos EVM Explorer',
        rpc_endpoints: 'RPC Endpoints',
        monitor: 'Monitor',
        oops: 'Oops. Nothing here...',
        go_home: 'Go Home',
        minted: 'Minted',
        telos_supply: 'Telos EVM supply',
        holders: 'Holders',
        evm_holders: 'All Telos EVM holders',
        total_nfts_minted: 'Total NFTs minted in this collection',
        select_sol_file: 'Select .sol contract file for upload',
        select_json_file: 'Select standard JSON input object file for upload',
        paste_contract_contents: 'you must select a file for upload or toggle input to paste contract contents',
        contract_address: 'Contract Address',
        enter_contract_address: 'Please enter contract address \'0x0123...\'',
        invalid_address_format: 'invalid address format',
        compiler_version: 'Compiler Version',
        select_compiler_version: 'select compiler version',
        eg_contracts: 'e.g., \'contracts/\'',
        contract_file_directory_path: 'Contract File(s) Directory Path (leave blank if none)',
        invalid_path_format: 'path must end with a forward slash /',
        upload_file: 'upload file',
        text_input: 'text input',
        runs_value_for_optimization: 'Runs value for optimization',
        constructor_arguments: 'Constructor Arguments',
        comma_seperated_values: 'comma seperated values e.g., Bob,123,0x12345...',
        no_trailing_commas: 'no trailing commas',
        paste_contract_code_here: 'copy & paste contract code here...',
        enter_contract_text: 'enter or paste contract text',
        verify_contract: 'Verify Contract',
        reset: 'Reset',
        gas_used: 'Gas used',
        transactions: 'Transactions',
        account: 'Account',
        contract: 'Contract',
        transfers_title: '{ type } Transfers:',
        loading_transfers: 'Loading transfers',
        loading_approvals: 'Loading approvals',
        erc20_transfers: 'ERC20 Transfers',
        erc721_transfers: 'ERC721 Transfers',
        erc1155_transfers: 'ERC1155 Transfers',
        tokens: 'Tokens',
        created_at_trx: 'Created at Trx',
        by_address: 'By Address',
        number_used_once: 'Number used once (nonce)',
        native_account: 'Native Account',
        balance: 'Balance',
        view_source_prompt: 'This contract has been verified. You can view the source code & metadata in the \'contract\' tab',
        account_url: '{ domain }/account/{ account }',
        tlos_balance: '{ balance } TLOS',
        couldnt_retreive_metadata_for_address: 'Could not retreive metadata for { address }: { message }',
        transaction_details: 'Transaction Details',
        transaction_not_found: 'Not found: { hash }',
        general: 'General',
        details: 'Details',
        logs: 'Logs',
        internal_txns: 'Internal Transactions',
        transaction_hash: 'Transaction Hash',
        click_to_change_date_format: 'Click to change date format',
        block_number: 'Block Number',
        from: 'From',
        to: 'To',
        date: 'Date',
        success: 'Success',
        failure: 'Failure',
        status: 'Status',
        balance_gwei: '{ amount } GWEI',
        balance_tlos: '{ amount } TLOS',
        error_message: 'Error Message',
        contract_function: 'Contract Function',
        function_parameters: 'Function Parameters',
        deployed_contract: 'Deployed Contract',
        click_to_show_in_wei: 'Click to show in wei',
        gas_price_charged: 'Gas Price Charged',
        gas_fee: 'Gas Fee',
        gas_limit: 'Gas Limit',
        nonce: 'Nonce',
        input: 'Input',
        output: 'Output',
        value: 'Value',
    },
    components: {
        known_tokens: 'Known tokens',
        other_tokens: 'Unknown tokens',
        no_balances_found: 'No erc20 token balance was found for this address',
        internal_txns: 'Internal Transactions',
        n_internal_txns: '{ amount } internal transactions',
        none: 'None',
        verify_prompt: 'This contract has not been verified.  Would you like to upload the contract(s) and metadata to verify source now?',
        verify_contract: 'Verify Contract',
        search_evm_address_failed: 'Search for EVM address linked to { accountName } native account failed. You can create one at wallet.telos.net',
        unknown_web3_login_type: 'Unknown web3 login type: { provider }',
        connect_wallet: 'Connect Wallet',
        view_address: 'View Address',
        disconnect: 'Disconnect',
        disable_wallet_extensions: 'Disable extension wallets or set Brave Wallet as default in browser wallet settings to use Brave Wallet',
        enable_wallet_extensions: 'Enable MetaMask extension and set default to `prefer extensions` in browser wallet settings to use MetaMask wallet',
        evm_wallets: 'EVM Wallets',
        advanced: 'Advanced',
        continue_on_metamask: 'Continue on Metamask',
        text1_native_wallets: 'Native wallets for',
        text2_advanced_users: 'advanced users',
        text3_or_to_recover_assets: 'or to recover assets sent to a native-linked address',
        copy_to_clipboard: 'Copy { text } to clipboard',
        latest_block: 'Latest Block',
        price_sources: 'Data obtained from Coingecko, CoinMarketCap or if unavailable from decentralized exchanges on Telos EVM',
        marketcap_sources: 'Data obtained from Coingecko or CoinMarketCap',
        usd_marketcap: 'USD Marketcap',
        usd_price: 'USD Price',
        usd_value: 'USD Value',
        tlos_price: 'TLOS Price',
        gas_price: 'Gas Price',
        click_to_expand: 'Click to expand',
        click_to_fold: 'Click to fold',
        search_evm_failed: 'Search for EVM address linked to { search_term } native account failed.',
        search_failed: 'Search failed, please enter a valid search term.',
        add_to_metamask: 'Add { symbol } to MetaMask',
        tx_hash: 'Tx Hash',
        block: 'Block',
        date: 'Date',
        method: 'Method',
        to_interacted_with: 'To / Interacted With',
        value_transfer: 'Value / Transfer',
        value: 'Value',
        token: 'Token',
        unknown_precision: 'Unknown Precision',
        click_to_change_format: 'Click to change format',
        func_exed_based_on_dec_data: 'Function executed based on decoded data',
        balance: 'Balance',
        error_fetching_balance: 'error fetching balance',
        launch_metamask_dialog_to_add: 'Launch MetaMask dialog to add { symbol }',
        search_hints: 'Transaction,Address,Block',
        no_provider_found: 'More than one provider is active, disable additional providers or current EVM wallet provider is not supported.',
        copied: 'Copied',
        copy_to_clipboard_failed: 'Copy to clipboard failed',
        gwei: 'Gwei',
        failed_to_fetch_transactions: 'Failed to fetch transactions',
        failed_to_parse_transaction: 'Failed to parse data for transaction, error was: { message }',
        executed_based_on_decoded_data: 'Function executed based on decoded input data. For unidentified function, method ID is displayed instead.',
        unsupported_token_type: 'Unsupported token type: { tokenType }',
        token_id: 'Id #{ tokenId }',
        status: 'Status',
        nonce: 'Nonce',
        from: 'From',
        to: 'To',
        approvals: {
            approved: 'Approved',
            approvals_granted_title: 'ERC Approvals:',
            login_account: 'Please log into this account using your wallet to be able to see its approvals.',
            approval_text: 'A signature from your wallet is needed to update the selected approvals\' amount to 0.',
            type: 'Type',
            delete: 'Delete',
            delete_all: 'Delete all',
            unselect_all: 'Unselect all',
            cancel: 'Cancel',
            remove_approval: 'Remove it',
            removal_approval: 'Remove single approval',
            unselect_all_approvals: 'Unselect all approvals',
            infinite: 'Infinite',
            infinite_tooltip: 'Allowance is higher than the total supply of this token',
            select: 'Select approval',
            unselect: 'Unselect approval',
            update: 'Approval Update',
            update_description: 'Enter the new amount to allow for the spender. This will require a wallet signature.',
            removal_approvals: 'Remove all approvals',
            removal_selected_approvals: 'Remove all selected approvals',
            update_failed: 'Failed to update approval',
            update_success: 'Approval to {spender} for {contract} was successfully updated',
            spender: 'Spender',
            amount: 'Allowance',
        },
        nfts : {
            show_without_metadata: 'Show NFTs with no metadata',
            id: 'Token ID',
            amount: 'Amount',
            name: 'Name',
            collection: 'Collection',
            nfts: 'NFTs',
            metadata: 'Meta',
            minter: 'Minter',
            owner: 'Owner',
            contract: 'Contract',
            image: 'Image',
            media: 'Media',
            minted: 'Block minted',
            attributes: 'attribute',
            ipfs: 'Get from IPFS',
            consult_metadata: 'Consult metadata',
            consult_media: 'Consult media',
            consult_collection: 'Consult collection',
        },
        holders : {
            show_system_contracts: 'Show system contracts',
            holder: 'Holder',
            balance: 'Balance',
            global_supply: 'Global supply',
            telos_supply: 'Telos EVM supply',
            updated: 'Last updated',
        },
        transaction: {
            in: 'in',
            out: 'out',
            load_error: 'Could not load transactions',
            form_from: 'From : ',
            form_to: 'To : ',
            form_token: 'Token : ',
            show_short: 'Show short',
            show_total: 'Show total',
            show_wei: 'Show wei',
            value_uint256: 'Value (uint256) : ',
            tlos_transfer: 'TLOS Transfer',
            contract_deployed: 'Contract Deployed',
            native_deposit: 'Deposit from Native Telos',
            native_withdraw: 'Withdraw to Native Telos',
            unknown: 'Unknown',
            contract_deployment: 'Contract Deployment',
            no_internal_trxs_found: 'No internal transactions found',
            human_readable: 'Human Readable',
            no_logs_found: 'No logs found',
            verify_related_contract: 'Verify the related contract for each log to see its human readable version',
            failed_to_retrieve_contract: 'Failed to retrieve contract with address { address }',
        },
        inputs: {
            incorrect_address_array_length: 'There should be { size } addresses in the array',
            incorrect_booleans_array_length: 'There should be { size } booleans in the array',
            incorrect_bytes_array_length: 'There should be { size } bytes in the array',
            incorrect_sigint_array_length: 'There should be { size } signed integers in the array',
            incorrect_strings_array_length: 'There should be { size } strings in the array',
            incorrect_unsigint_array_length: 'There should be { size } unsigned integers in the array',

            invalid_address_array_string: 'Entered value does not represent an array of addresses',
            invalid_booleans_array_string: 'Entered value does not represent an array of bool',
            invalid_bytes_array_string: 'Entered value does not represent an array of bytes',
            invalid_sigint_array_string: 'Entered value does not represent an array of signed integers',
            invalid_strings_array_string: 'Entered value does not represent an array of strings',
            invalid_unsigint_array_string: 'Entered value does not represent an array of unsigned integers',

            invalid_address_length: 'An address must be exactly 40 characters, not including "0x"',
            invalid_address_start: 'An address must begin with 0x',
            invalid_address_characters: 'Entry contains invalid characters',
            readonly: 'This field is readonly',
            required: 'This field is required',
            too_large: 'Maximum value for int{ size } is { max }',
            too_small: 'Minimum value for int{ size } is { max }',
            too_large_pow2: 'Maximum value for uint{ size } is 2^{ size } - 1',
            too_small_pow2: 'Minimum value for int{ size } is -(2^{ size }) + 1',
            too_large_unsigint: 'Maximum value for uint{ size } is 2^{ size } - 1',
            no_negative_unsigint: 'Value for uint{ size } must not be negative',
            invalid_signed_integer: 'Invalid signed integer',
            invalid_unsigint: 'Entry must be a valid unsigned integer',
            str_input_placeholder: '["some value", ... , "final value"]',
            str_input_hint: 'Double quotes in strings must be escaped (\\")',
            address_placeholder: 'Address beginning with 0x',
            address_label: '{ label } (address)',
            boolean_array_label: '{ label } (bool[{ size }])',
        },
        health: {
            status: 'Status',
            checked_at: 'Checked at',
            task: 'Task',
            message: 'Message',
            category: 'Category',
            block_height: 'Block Height',
            latency: 'Latency',
            success: 'Success',
            info: 'Info',
            alert: 'Alert',
            error: 'Error',
            click_to_change_format: 'Click to change format',
        },
        contract_tab: {
            abi_loaded_from_interface: 'This generic ABI was loaded using IEP-165\'s supportsInterface() and may not be exhaustive. Some of the functions displayed may not be implemented. Verify the contract to be able to interact with it using its full ABI.',
            copy_abi_to_clipboard: 'Copy contract ABI JSON to clipboard',
            enter_amount: 'Select number of decimals and enter an amount, this will be entered for you into the function parameter as uint256',
            result: 'Result',
            view_transaction: 'View transaction',
            code: 'Code',
            bytecode: 'Bytecode',
            read: 'Read',
            write: 'Write',
            amount: 'Amount',
            value: 'Value',
            custom_decimals: 'Custom decimals',
            custom: 'Custom',
            unverified_contract_source: 'This contract source code has not been uploaded.',
            click_here: 'Click here',
            upload_source_files: 'to upload source files which will also verify this contract. ',
            abi_autoloaded: 'In the meantime, you can interact with the contract using our automatically loaded preset ABI.',
            choose_abi: 'Alternatively, you can interact with the contract either using one of our preset ABIs or a custom JSON one:',
            use_erc20_abi: 'Use ERC20 ABI',
            use_erc721_abi: 'Use ERC721 ABI',
            use_erc1155_abi: 'Use ERC155 ABI',
            abi_from_json: 'ABI from JSON',
            paste_abi_json_here: 'Paste ABI JSON here',
            abi_json_preview: 'ABI JSON preview',
            provided_abi_invalid: 'Provided ABI is invalid',
            provided_json_invalid: 'Provided JSON is invalid',
            read_functions: 'Read functions',
            write_functions: 'Write functions',
            unverified_contract: 'Unverified contract',
            verified_contract: 'Verified contract',
        },
        header: {
            sign_in: 'Sign in',
            sign_out: 'Sign out',
            liq_staking: 'Liquid Staking',
            goto_staking: 'Go to Staking',
            goto_health_monitor: 'go to Heath Monitor page',
            goto_mainnet: 'Go to Mainnet',
            goto_testnet: 'Go to Testnet',
            health_monitor: 'Health Monitor',
            health_status: 'Health Status',
            advanced: 'Advanced',
            light_mode: 'Light Mode',
            dark_mode: 'Dark Mode',
            address_not_found: 'Search for EVM address linked to { account } native account failed.',
            search_failed: 'Search failed, please enter a valid search term.',
            goto_address_details: 'Go to address details',
            copy_address: 'Copy address',
            address_copied: 'Address copied to clipboard',
            search_placeholder: 'Address, Tx, Block',
            select_language: 'Select Language',
            open_language_switcher: 'open language switcher',
        },
    },
    global: {
        true: 'true',
        false: 'false',
        close: 'Close',
        toggle_fullscreen: 'Toggle fullscreen mode',
        name: 'Name',
        symbol: 'Symbol',
        show_table: 'Show table',
        show_grid: 'Show grid',
        records_per_page: 'Records per page:',
        max_decimals_reached: 'Please use { max } decimal places maximum',
        erc20_token: 'ERC20 Token',
        erc721_token: 'ERC721 Token',
        sign: 'Sign',
        hours: 'hour(s)',
        updated: 'Last updated',
        action: 'Action',
        wallet_response: 'Awaiting response from your wallet provider',
        minutes: 'minute(s)',
        days: 'day(s)',
        and: 'and',
        unknown: 'Unknown',
        data_behind_by: 'Sorry ! The data shown is behind by',
        not_synced: 'Indexer is not synced to latest block',
        try_reloading: 'You can try reloading the page to fix it, if the problem persist please contact a Telos team member.',
        error: 'Error',
        expand: 'See more ({more})',
        async_error_description: 'Sorry ! An error occured trying to request resources. Please make sure your internet connection is working and try again. If the error persists, contact us directly on our Telegram channel.',
        language: 'Language',
        cancel: 'Cancel',
        ok: 'Ok',
        dismiss: 'Dismiss',
        empty_block: 'Block is empty',
        empty_block_description: 'This block has no transactions. Try navigating to a different block',
    },
    layouts: {
        health_status: 'Health Status',
        stake_telos: 'Stake TLOS',
        teloscan_mainnet: 'Teloscan Mainnet',
        teloscan_testnet: 'Teloscan Testnet',
    },
};

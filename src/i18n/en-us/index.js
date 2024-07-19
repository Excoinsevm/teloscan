export default {
    locale: {
        current_language_name: 'English',
    },
    pages: {
        blocklist: {
            title: 'Blocks',
        },
        blockpage: {
            block: 'Block',
            overview: 'Overview',
            transactions: 'Transactions',
        },
        transactions: {
            contract_deployment: 'Contract Deployment',
            deposit_action_name: 'deposit',
            deposit_native: 'deposit (native)',
            five_hundred_k_disclaimer: 'Showing the last 500K records of { total }',
            for_block: 'for block',
            for: 'for',
            gas_info_label: 'Gas Info',
            native_deposit_tooltip: 'Deposit from Native Telos',
            native_withdraw_tooltip: 'Withdraw to Native Telos',
            nonce_label: 'Nonce',
            see_more_details: 'See more details',
            see_tx_preview_tooltip: 'See preview of the transaction details',
            status_label: 'Status',
            to: 'to',
            transaction_action_label: 'Transaction Action',
            transaction_fee_label: 'Transaction Fee',
            transactions: 'Transactions',
            transfer_for_x_tlos_from: 'Transfer for { amount } TLOS from',
            transfer_tlos_action_name: 'Transfer TLOS',
            withdraw_action_name: 'withdraw',
            withdraw_native: 'withdraw (native)',
            x_gas_used_of_y_limit: '{ amount } gas used of { limit } limit',
        },
        transaction: {
            page_title: 'Transaction Details',
            overview: 'Overview',
            logs: 'Logs',
            internal: 'Internal Transactions',
            not_found: 'Transaction not found',
        },
        internaltrx: {
            page_title: 'Contract Internal Transactions',
            for_address: 'for address { address }',
        },
        home: {
            telos_evm_explorer: 'The Telos EVM Explorer',
            market_cap: 'Market Cap',
            last_finalized_block: 'Last Finalized Block',
            total_transactions: 'Total Transactions',
        },
        error: {
            title: 'Page not found.',
            subtitle: 'Please double-check the URL. If it looks correct, try again later.',
        },
        issuer: 'Issuer',
        account_not_found: 'We could not find this account',
        approvals: 'Approvals',
        supported_interfaces: 'Known supported interface(s)',
        explore_transactions: 'Explore Transactions',
        recent_transactions: 'Recent transactions',
        rpc_endpoints: 'RPC Endpoints',
        monitor: 'Monitor',
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
        account: 'Address',
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
        count: 'Count',
        overview: 'overview',
        more_info: 'more info',
        transaction_sent: 'txn sent',
        first: 'first',
        last: 'last',
        contract_creator: 'contract creator',
    },
    components: {
        gas_limit_tooltip: 'The maximum amount of gas that can be spent on this transaction',
        gas_used_tooltip: 'The amount of gas that was spent on this transaction',
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
        unknown_evm_login_provider: 'Unknown EVM login provider: { provider }',
        unknown_native_login_provider: 'Unknown native login provider: { provider }',
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
        gas_price_tlos: '(Gas Price * Gas Used) in TLOS',
        gas_price_gwei: 'Gas Price in gwei',
        click_to_expand: 'Click to expand',
        click_to_fold: 'Click to fold',
        expand_all: 'Expand all',
        collapse_all: 'Collapse all',
        search_evm_failed: 'Search for EVM address linked to { search_term } native account failed.',
        search_failed: 'Search failed, please enter a valid search term.',
        add_to_metamask: 'Add { symbol } to MetaMask',
        tx_hash: 'Txn Hash',
        block: 'Block',
        date: 'Date Time (UTC)',
        age: 'Age',
        method: 'Method',
        to_interacted_with: 'To',
        value: 'Value',
        txn_fee: 'Txn Fee',
        txn_failed: 'Txn Failed',
        token: 'Token',
        unknown_precision: 'Unknown Precision',
        click_to_change_format: 'Click to change format',
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
        executed_based_on_decoded_data: 'Name of the function executed based. For unidentified functions, method ID is displayed instead.',
        unsupported_token_type: 'Unsupported token type: { tokenType }',
        token_id: 'Id #{ tokenId }',
        status: 'Status',
        nonce: 'Nonce',
        from: 'From',
        to: 'To',
        item: 'Item',
        amount: 'Amount',
        download_image: 'Download Image',
        confirm_download_image: 'Confirm you want to download this image',
        confirm: 'Confirm',
        approvals: {
            token_id: 'Token ID',
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
            self: 'self',
            load_error: 'Could not load transactions',
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
            contract_interaction: 'Contract Interaction',
            deposit: 'deposit',
            withdraw: 'withdraw',
            no_internal_trxs_found: 'No internal transactions found',
            human_readable: 'Human Readable',
            no_logs_found: 'No logs found',
            verify_related_contract: 'Verify the related contract for each log to see its human readable version',
            failed_to_retrieve_contract: 'Failed to retrieve contract with address { address }',
            trx_hash: 'Transaction Hash',
            trx_hash_tooltip: 'The unique identifier of the transaction.',
            block: 'Block',
            block_tooltip: 'The block number in which this transaction was included.',
            status: 'Status',
            status_tooltip: 'Indicates whether the transaction was successful, failed, or is pending',
            timestamp: 'Timestamp',
            timestamp_tooltip: 'The time and date the transaction was confirmed.',
            trx_action: 'Transaction Action',
            trx_action_tooltip: 'The operation performed by this transaction, such as a transfer or contract execution.',
            from: 'From',
            from_tooltip: 'The address initiating the transaction.',
            to: 'To',
            to_tooltip: 'The recipient address of the transaction.',
            erc20_transfers: 'ERC20 transfers',
            erc20_transfers_tooltip: 'List of ERC20 token transfers in this transaction',
            erc721_transfers: 'ERC721 transfers',
            erc721_transfers_tooltip: 'List of ERC721 token transfers in this transaction',
            erc1155_transfers: 'ERC1155 transfers',
            erc1155_transfers_tooltip: 'List of ERC1155 token transfers in this transaction',
            tlos_transfers: 'TLOS transfers',
            tlos_transfers_tooltip: 'List of internal TLOS transfers in this transaction',
            value: 'Value',
            value_tooltip: 'The amount of cryptocurrency transferred in this transaction.',
            gas_fee: 'Transaction Fee',
            gas_fee_tooltip: 'The total fee paid for this transaction, in TLOS and USD.',
            gas_price: 'Gas Price',
            gas_price_tooltip: 'The price per unit of gas paid for the transaction.',
            more_details: 'More Details',
            show_more_details: 'click to show more',
            show_less_details: 'click to show less',
            gas_limit_n_usage: 'Gas Limit & Usage by Txn',
            gas_limit_n_usage_tooltip: 'The maximum amount of gas that was allowed for the transaction, and the actual amount of gas used.',
            nonce: 'Nonce',
            nonce_tooltip: 'A sequential number tied to every transaction made by the same address, ensuring transactions are processed in order.',
            position_in_block: 'Position in Block',
            position_in_block_tooltip: 'The position of this transaction in the block.',
            input: 'Input',
            input_tooltip: 'Data sent along with the transaction, typically used for contract interactions.',
        },
        inputs: {
            incorrect_address_array_length: 'There should be { size } addresses in the array',
            incorrect_booleans_array_length: 'There should be { size } booleans in the array',
            incorrect_bytes_array_length: 'There should be { size } bytes in the array',
            odd_number_of_bytes: 'There should be an even number of byte characters',
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
            unverified_contract_source: 'This contract is unverified.',
            verified_contract_source: 'Verify and Publish your contract source code',
            here: 'here.',
            upload_source_files: 'to upload source files which will also verify this contract. ',
            abi_autoloaded: 'In the meantime, you can interact with the contract using our automatically loaded preset ABI.',
            choose_abi: 'Alternatively, you can interact with the contract either using one of our preset ABIs or a custom JSON one:',
            use_erc20_abi: 'Use ERC20 ABI',
            use_erc721_abi: 'Use ERC721 ABI',
            use_erc1155_abi: 'Use ERC1155 ABI',
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
            address_copied: 'Address copied to clipboard',
            address_not_found: 'Search for EVM address linked to { account } native account failed.',
            api_documentation: 'API Documentation',
            blockchain: 'Blockchain',
            blocks: 'Blocks',
            connect_wallet: 'Connect Wallet',
            copy_address: 'Copy address',
            csv_export: 'CSV Export',
            developers: 'Developers',
            disconnect_wallet_tooltip: 'Disconnect wallet',
            gas: 'Gas',
            goto_address_details: 'Go to address details',
            health_monitor: 'Health Monitor',
            home: 'Home',
            more: 'More',
            network: 'Network',
            open_language_switcher: 'Open language switcher',
            search_failed: 'Search failed, please enter a valid search term.',
            search_placeholder: 'Search Address/Block/TxnHash',
            select_language: 'Select Language',
            switch_to_dark_theme: 'Switch to dark theme',
            switch_to_light_theme: 'Switch to light theme',
            system_token_price: '{token} price',
            telos_ecosystem: 'Telos Ecosystem',
            telos_zero_explorer: 'Telos Zero Explorer',
            telos_evm_logo_alt: 'Telos EVM logo',
            telos_wallet: 'Wallet',
            telos_bridge: 'Bridge',
            transactions: 'Transactions',
            internal_transactions: 'Internal Transactions',
            verify_contract_sourcify: 'Verify Contract (Sourcify)',
            view_other_networks: 'View other networks',
        },
        blocks: {
            block_height: 'Block Height',
            timestamp: 'Timestamp',
            size: 'Size',
            gas_used: 'Gas Used',
            gas_limit: 'Gas Limit',
            hash: 'Hash',
            parent_hash: 'Parent Hash',
            nonce: 'Nonce',
            extra_data: 'Extra Data',
            extra_data_tooltip: 'The extra data field is 32 bytes long and can be used for special purposes',
            block_height_tooltip: 'Also called "Block Number". The block height represents the length of of the blockchain, increasing by one after the addition of a new block',
            timestamp_tooltip: 'The time and date the block was produced',
            transactions_tooltip: 'The number of transactions in the block. Internal Transactions are transactions which occur as a result of contract execution and include a TLOS value',
            size_tooltip: 'the amount of data in the block, determined by the gas limit',
            gas_used_tooltip: 'The amount of gas used in the block',
            gas_limit_tooltip: 'The gas limit for all transactions in the block',
            nonce_tooltip: 'The value used during mining to achieve consensus on Proof of Work for the block',
            hash_tooltip: 'The hash of the block header',
            parent_hash_tooltip: 'The hash of the parent block',
            count_transactions: '{count} transactions',
            count_transaction: '1 transaction',
            in_this_block: 'in this block',
            transactions: 'Transactions',
            transactions_root: 'Transactions Root',
            block: 'Block',
            age: 'Age',
        },
        footer: {
            telos: 'Telos',
            telos_homepage: 'Telos Homepage',
            telos_wallet: 'Telos Wallet',
            telos_bridge: 'Telos Bridge',
            telos_zero_explorer: 'Telos Zero Explorer',
            buy_telos: 'Buy Telos',
            stake_telos: 'Stake Telos',
            telos_ecosystem: 'Telos Ecosystem',
            network_status: 'Network Status',
            about: 'About',
            about_us: 'About Us',
            contactUs: 'Contact Us',
            build: 'Build',
            api_documentation: 'API Documentation',
            telos_documentation: 'Telos Documentation',
            github: 'Github',
            brand_assets: 'Brand Assets',
            back_to_top: 'Back to top',
        },
        export: {
            block_range: 'Block Range',
            choose_download_option: 'Choose download option',
            column_header_action: 'Action',
            column_header_amount: 'Amount',
            column_header_block_number: 'Block Number',
            column_header_contract_address: 'Contract Address',
            column_header_date: 'Date',
            column_header_from: 'From',
            column_header_nft_collection_name: 'NFT Collection Name',
            column_header_nft_id: 'NFT ID',
            column_header_timestamp: 'Unix Timestamp (ms)',
            column_header_to: 'To',
            column_header_token_contract_address: 'Token Contract Address',
            column_header_token_name: 'Token Name',
            column_header_token_symbol: 'Token Symbol',
            column_header_tx_hash: 'Transaction Hash',
            date_range: 'Date Range',
            start_date: 'Start Date',
            end_date: 'End Date',
            invalid_range: 'Invalid range',
            download_csv: 'Download CSV',
            download_transactions_csv: 'Download Transactions CSV',
            download_erc_20_transfers_csv: 'Download ERC-20 Transfers CSV',
            download_erc_721_transfers_csv: 'Download ERC-721 Transfers CSV',
            download_erc_1155_transfers_csv: 'Download ERC-1155 Transfers CSV',
            end_block: 'End Block',
            erc_1155_transfers: 'ERC-1155 Transfers',
            erc_20_transfers: 'ERC-20 Transfers',
            erc_721_transfers: 'ERC-721 Transfers',
            export_data: 'Export Data',
            export_type: 'Export Type',
            limit_notice: 'Only the first {amount} results will be exported',
            notification_successful_download: 'Download successful',
            notification_failed_download: 'An error occurred while downloading data',
            page_header: 'Download Data (CSV Export)',
            reset: 'Reset',
            start_block: 'Start Block',
            transactions: 'Transactions',
        },
    },
    evm_wallet: {
        send_icon_alt: 'Send icon',
        receive_icon_alt: 'Receive icon',
        buy_icon_alt: 'Buy more tokens icon',
        token_logo_alt: 'Token logo',
        send: 'Send',
        receive: 'Receive',
        scan_qr: 'Scan the QR Code to get your account',
        buy: 'Buy',
        unwrap: 'Unwrap',
        wrap: 'Wrap',
        stake: 'Stake',
        unstake: 'Unstake',
        copy: 'Copy',
        link_to_send_aria: 'Link to Send page',
        link_to_receive_aria: 'Link to Receive page',
        link_to_buy_aria: 'External link to buy tokens',
        balance_row_actions_aria: 'Balance row actions',
        no_fiat_value: 'No reliable fiat value found',
        receiving_account: 'Receiving Account',
        account_required: 'Account is required',
        token: 'Token',
        cancel: 'Cancel',
        estimated_fees: 'Estimated Fees',
        amount_available: '{amount} Available',
        amount_required: 'Amount is required',
        view_contract: 'View Contract',
        invalid_form: 'There is at least one invalid field.',
        general_error: 'There was an error processing your request',
        invalid_amount_precision: 'You can only enter {precision} decimal places',
        sent: 'Sent',
        received: 'Received',
        swapped: 'Swapped',
        switch: 'Switch',
        failed_contract_interaction: 'Failed contract interaction',
        contract_interaction: 'Contract interaction',
        contract_creation: 'Contract creation',
        aria_link_to_address: 'Link to block explorer address page',
        aria_link_to_transaction: 'Link to block explorer transaction page',
        click_to_fill_max: 'Click to fill max amount',
        amount_exceeds_available_balance: 'Balance too low',
        incorrect_network: 'Incorrect network detected! Switch to {networkName} to complete transaction',
        viewing_n_transactions: 'Viewing {rowsPerPage} of {totalRows} transactions',
        no_transactions_found: 'No transactions found',
        add_to_metamask: 'Add to MetaMask',
        rejected_metamask_prompt: 'The MetaMask prompt was rejected',
        error_adding_token_to_metamask: 'Error adding token to MetaMask',
        inventory: 'Collectibles',
    },
    global: {
        all: 'all',
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
        async_error_description: 'Sorry ! An error occurred trying to request resources. Please make sure your internet connection is working and try again. If the error persists, contact us directly on our Telegram channel.',
        language: 'Language',
        cancel: 'Cancel',
        ok: 'Ok',
        dismiss: 'Dismiss',
        empty_block: 'Block is empty',
        empty_block_description: 'This block has no transactions. Try navigating to a different block',
        internal_error: 'Internal Error',
    },
    layouts: {
        health_status: 'Health Status',
        stake_telos: 'Stake TLOS',
        teloscan_mainnet: 'Teloscan Mainnet',
        teloscan_testnet: 'Teloscan Testnet',
    },
    notification:{
        success_title_trx: 'Success',
        success_title_copied: 'Copied',
        success_message_trx: 'Your transaction has been processed. For detailed information, click the link below.',
        success_message_revoking: 'Revoking <b>{symbol}</b> allowance for <b>{address}</b> was successful.',
        success_message_copied: 'Your account name has been copied to the clipboard.',
        success_see_trx_label: 'See Transaction',
        dismiss_label: 'Dismiss',
        error_title: 'Error',
        error_title_disconnect: 'No Internet connection',
        error_message_disconnect: 'We\'re sorry, it looks like you\'re not connected to the internet. Please check your network connection and try again.',
        error_see_details_label: 'See Details',
        error_details_title: 'Error Details',
        neutral_message_sending: 'Sending <b>{quantity}</b> to <b>{address}</b>',
        neutral_message_revoking: 'Revoking  <b>{symbol}</b> allowance for <b>{address}</b>',
        neutral_message_wrapping: 'Wrapping <b>{quantity} {symbol}</b>',
        neutral_message_unwrapping: 'Unwrapping <b>{quantity} {symbol}</b>',
        neutral_message_withdrawing: 'Withdrawing <b>{quantity} {symbol}</b>',
        dont_show_message_again: 'Don\'t show me this message again',
        error_message_sending: 'An error occurred while sending <b>{quantity}</b> to <b>{address}</b>',
        error_message_revoking: 'An error occurred while revoking <b>{symbol}</b> allowance for <b>{address}</b>',
        error_message_wrapping: 'An error occurred while wrapping <b>{quantity} {symbol}</b>',
        error_message_unwrapping: 'An error occurred while unwrapping <b>{quantity} {symbol}</b>',
        error_message_withdrawing: 'An error occurred while withdrawing <b>{quantity} {symbol}</b>',
        error_message_custom_call: 'An error occurred while calling <b>{name}</b> with <b>{params} parameters</b>',
        error_message_custom_call_send: 'An error occurred while calling <b>{name}</b> with <b>{params} parameters</b>, sending <b>{quantity} {symbol}</b>',
        neutral_message_custom_call: 'calling <b>{name}</b> with <b>{params} parameters</b>',
        neutral_message_custom_call_send: 'calling <b>{name}</b> with <b>{params} parameters</b>, sending <b>{quantity} {symbol}</b></b>',
    },
    antelope: {
        contracts: {
            invalid_contract: 'Contract or contract ABI missing',
            contract_data_required: 'Contract data missing',
        },
        evm: {
            error_support_provider_request: 'Provider does not support request method',
            error_login: 'Error in login proccess',
            error_add_chain_rejected: 'User has rejected the request to add the chain',
            error_connect_rejected: 'User has rejected the request to connect to the chain',
            error_add_chain: 'Error in adding chain',
            error_switch_chain_rejected: 'User has rejected the request to switch the chain',
            error_switch_chain: 'Error in switching chain',
            error_no_provider: 'No provider found',
            error_getting_function_interface: 'Error trying to find event signature for function {prefix}',
            error_getting_event_interface: 'Error trying to find event signature for event {hex}',
            error_invalid_address: 'Invalid address',
            error_getting_contract_creation: 'Error trying to get contract creation info',
            error_no_signer: 'No signer found',
            error_send_transaction: 'An unknown error occurred when sending the transaction',
            error_transfer_failed: 'An unknown error occurred when transferring tokens',
            error_call_exception: 'An error occurred while calling the smart contract function',
            error_insufficient_funds: 'You don\'t have enough funds to complete this transaction',
            error_missing_new: 'A new operator was missing when deploying the smart contract',
            error_nonce_expired: 'The nonce used for this transaction is too low',
            error_numeric_fault: 'A numeric operation failed',
            error_replacement_underpriced: 'A new transaction replacing an existing one does not have enough gas price',
            error_transaction_replaced: 'This transaction was replaced by another transaction',
            error_unpredictable_gas_limit: 'The gas limit for this transaction couldn\'t be estimated',
            error_user_rejected: 'You rejected the transaction',
            error_transaction_canceled: 'You canceled the action',
            error_wrap_not_supported_on_native: 'Wrap is not supported on native chain',
            error_unwrap_not_supported_on_native: 'Unwrap is not supported on native chain',
            error_wrap_failed: 'An unknown error occurred when wrapping tokens',
            error_unwrap_failed: 'An unknown error occurred when unwrapping tokens',
            error_withdraw_failed: 'An unknown error occurred when withdrawing tokens',
            error_fetching_token_price: 'An unknown error occurred when fetching token price data',
        },
        history: {
            error_fetching_transactions: 'Unexpected error fetching transactions. Please refresh the page to try again.',
            error_fetching_nft_transfers: 'Unexpected error fetching NFT transfers. Please refresh the page to try again.',
        },
        chain: {
            error_update_data: 'Error in updating data',
            error_apy: 'Error in getting APY',
            error_invalid_network: 'Invalid network',
            error_no_default_authenticator: 'No default authenticator found',
        },
        account: {
            error_login_native: 'An error has occurred trying to login to the native chain',
            error_login_evm: 'An error has occurred trying to login to the EVM chain',
            error_auto_login: 'An error has occurred trying to auto login the user',
        },
        utils: {
            error_parsing_transaction: 'Failed to parse transaction data',
            error_contract_instance: 'Failed to create contract instance',
            error_parsing_log_event: 'Failed to parse log event',
        },
        balances: {
            error_at_transfer_tokens: 'An error has occurred trying to transfer tokens',
            error_token_contract_not_found: 'Token contract not found for address {address}',
        },
        rex: {
            error_contract_not_found: 'Contract not found for address {address}',
        },
        wallets: {
            error_system_token_transfer_config: 'Error getting Wagmi system token transfer config',
            error_token_transfer_config: 'Error getting Wagmi token transfer config',
            error_oreid_no_chain_account: 'The app {appName} does not have a chain account for the chain {networkName}',
            network_switch_success: 'Network switched successfully',
        },
        wrap: {
            error_getting_wrapped_contract: 'An error occurred while getting the wrapped system token contract',
            error_wrap: 'An unknown error occurred while wrapping system token',
        },
        words: {
            day: 'day',
            days: 'days',
            hour: 'hour',
            hours: 'hours',
            minute: 'minute',
            minutes: 'minutes',
            second: 'second',
            seconds: 'seconds',
            time_ago: '{time} ago',
        },
    },
};


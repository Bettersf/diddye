import { PublicKey } from '@solana/web3.js'
import { FAKE_TOKEN_MINT, PoolToken, TokenMeta, makeHeliusTokenFetcher } from 'gamba-react-ui-v2'

// Get RPC from the .env file or default to the public RPC.
export const RPC_ENDPOINT = import.meta.env.VITE_RPC_ENDPOINT ?? 'https://mainnet.helius-rpc.com/'

// Solana address that will receive fees when somebody plays on this platform
export const PLATFORM_CREATOR_ADDRESS = new PublicKey(
  'BRF9n1dkCh13DqkA2bmx5cwDgbBtkoJkk18gwEzpZ2ur'
)

// Gamba explorer URL - Appears in RecentPlays
export const EXPLORER_URL = `https://explorer.gamba.so/`;

// Platform URL - Appears in ShareModal
export const PLATFORM_SHARABLE_URL = 'https://s-bets.fun'

// Creator fee (in %)
export const PLATFORM_CREATOR_FEE = 0.05 // 1% (1/100 = 0.01)

// Jackpot fee (in %)
export const PLATFORM_JACKPOT_FEE = 0.001 // 0.1% (0.1/100 = 0.001)

// Just a helper function
const lp = (tokenMint: PublicKey | string, poolAuthority?: PublicKey | string): PoolToken => ({
  token: new PublicKey(tokenMint),
  authority: poolAuthority !== undefined ? new PublicKey(poolAuthority) : undefined,
})

/**
 * List of pools supported by this platform
 * Make sure the token you want to list has a corresponding pool on https://explorer.gamba.so/pools
 * For private pools, add the creator of the Liquidity Pool as a second argument
 */
export const POOLS = [
  // SOL:
  lp('So11111111111111111111111111111111111111112'),
  // USDC:
  lp('EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v'),
  // Wormhole:
  lp('85VBFQZC9TZkfaptBWjvUw7YbZjy52A6mjtPGjstQAmQ'),
  //jupiter
  lp('JUPyiwrYJFskUPiHa7hkeR8VUtAeFoSYbKedZNsDvCN'),
]

// The default token to be selected
export const DEFAULT_POOL = POOLS[0]

/**
 * List of token metadata for the supported tokens
 * Alternatively, we can provide a fetcher method to automatically fetch metdata. See TOKEN_METADATA_FETCHER below.
 */
export const TOKEN_METADATA: (Partial<TokenMeta> & {mint: PublicKey})[] = [
  {
    mint: new PublicKey("So11111111111111111111111111111111111111112"),
    symbol: 'SOL',
    name: 'Solana',
    image: "https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/So11111111111111111111111111111111111111112/logo.png",
    decimals: 9,
    baseWager: 0.01 * 1e9,
  }, 
  {
    mint: new PublicKey("EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v"),
    symbol: 'USDC',
    name: 'Usdc',
    image: "https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v/logo.png",
    decimals: 6,
    baseWager: 1 * 1e6,
  }, 
  {
    mint: new PublicKey("85VBFQZC9TZkfaptBWjvUw7YbZjy52A6mjtPGjstQAmQ"),
    symbol: 'W',
    name: 'Wormhole',
    image: "https://statics.solscan.io/cdn/imgs/s60?ref=68747470733a2f2f776f726d686f6c652e636f6d2f746f6b656e2e706e67",
    decimals: 6,
    baseWager: 1 * 1e6,
  },
  {
    mint: new PublicKey("JUPyiwrYJFskUPiHa7hkeR8VUtAeFoSYbKedZNsDvCN"),
    symbol: 'JUP',
    name: 'Jupiter',
    image: "https://static.jup.ag/jup/icon.png",
    decimals: 6,
    baseWager: 1 * 1e6,
  },  
]

/**
 * A method for automatically fetching Token Metadata.
 * Here we create a fetcher that uses Helius metadata API, if an API key exists as an environment variable.
 */
export const TOKEN_METADATA_FETCHER = (
  () => {
    if (import.meta.env.VITE_HELIUS_API_KEY) {
      return makeHeliusTokenFetcher(
        import.meta.env.VITE_HELIUS_API_KEY,
        { dollarBaseWager: 1 },
      )
    }
  }
)()

import { getDefaultConfig } from '@rainbow-me/rainbowkit';
import {
  arbitrum,
  mainnet,
  sepolia,
  zkSync,
  zkSyncSepoliaTestnet
} from 'wagmi/chains';

export const config = getDefaultConfig({
  appName: 'RainbowKit App',
  projectId: 'YOUR_PROJECT_ID',
  chains: [
    mainnet,
    arbitrum,
    zkSync,
    zkSyncSepoliaTestnet,
    sepolia,
    //...(process.env.NEXT_PUBLIC_ENABLE_TESTNETS === 'true' ? [sepolia] : []),
  ],
  ssr: true,
});
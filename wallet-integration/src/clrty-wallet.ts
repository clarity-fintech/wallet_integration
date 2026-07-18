/** CLRTYWallet — CLRTY-1 only (chain 1202). Bridges / EIP-747 deferred per CLRTY1_ONLY_SCOPE. */

export type CLRTYWalletOptions = { api?: string; rpc?: string };

const CLRTY_CHAIN_ID = 1202;

export class CLRTYWallet {
  private readonly api: string;
  private readonly rpc: string;

  private constructor(opts: CLRTYWalletOptions) {
    this.api = opts.api ?? 'https://rpc.clarity-fintech.com';
    this.rpc = opts.rpc ?? 'https://rpc.clarity-fintech.com';
  }

  static connect(opts: CLRTYWalletOptions = {}): CLRTYWallet {
    return new CLRTYWallet(opts);
  }

  get chainId(): number {
    return CLRTY_CHAIN_ID;
  }

  async getBalance(address: string): Promise<{ address: string; balance: string; decimals: number; chain: string }> {
    const res = await fetch(this.rpc, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ jsonrpc: '2.0', id: 1, method: 'clrty_getBalance', params: [address] }),
    });
    const body = (await res.json()) as { result?: string };
    return { address, balance: body.result ?? '0', decimals: 9, chain: 'clrty-1' };
  }

  /** Bridge paths are deferred (Phase 10). Returns status only. */
  async suggestBridgePath(opts: { wallet: string; amount?: bigint }): Promise<Record<string, unknown>> {
    return {
      status: 'deferred',
      chain: 'clrty-1',
      wallet: opts.wallet,
      amount: String(opts.amount ?? 0n),
      policy: 'CLRTY1_ONLY_SCOPE',
      message: 'Cross-chain bridges out of scope at launch',
    };
  }

  async signTransaction(opts: { wallet: string; payload: unknown }): Promise<Record<string, unknown>> {
    const res = await fetch(`${this.api}/v1/wallet/sign`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ wallet: opts.wallet, payload: opts.payload, chain: 'clrty-1', chain_id: CLRTY_CHAIN_ID }),
    });
    return (await res.json()) as Record<string, unknown>;
  }

  async fetchRegistry(): Promise<Record<string, unknown>> {
    const res = await fetch(`${this.api}/v1/wallet/registry`);
    if (!res.ok) {
      return {
        symbol: 'CLRTY',
        chain_ids: ['clrty-1'],
        chain_id_decimal: CLRTY_CHAIN_ID,
        scope: 'clrty-1-only',
      };
    }
    return (await res.json()) as Record<string, unknown>;
  }

  /**
   * EIP-747 watchAsset is deferred (ETH token mirrors).
   * Prefer native CLRTY on clrty-1; do not call window.ethereum for Ethereum mainnet.
   */
  async promptWatchAsset(): Promise<Record<string, unknown>> {
    const registry = await this.fetchRegistry();
    return {
      status: 'deferred',
      reason: 'eip747_eth_mirrors_phase_10',
      chain: 'clrty-1',
      registry,
    };
  }
}

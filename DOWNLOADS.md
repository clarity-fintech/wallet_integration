# Downloads — CLRTY Wallet Integration

**CLRTY-1** · chain **1202** · https://rpc.clarity-fintech.com · MIS checks via **`bin/misc`** only.

All kits are packaged for direct GitHub download. SHA-256 checksums are tracked in [`dist/SHA256SUMS.txt`](dist/SHA256SUMS.txt).

---

## Primary downloads

| Kit | File | Contents |
|-----|------|----------|
| **Zero-Friction Partner Kit** | [dist/integration-package-zero-friction.zip](dist/integration-package-zero-friction.zip) | Outreach letter, EIP-747 registry, 10-line SDK, portal HTML, 25-node manifests |
| **Full Integration Bundle** | [dist/clrty-wallet-integration-full.zip](dist/clrty-wallet-integration-full.zip) | Everything below — SDKs, access packs, audit docs, scripts, verify gates |
| **Wallet SDK Downloads** | [dist/wallet-sdk-downloads.zip](dist/wallet-sdk-downloads.zip) | TypeScript, Python, Rust, Go, OpenAPI, CLRTYWallet, integration SDK, wallet manifests |
| **Wallet Process Pack** | [dist/wallet-process-pack.zip](dist/wallet-process-pack.zip) | README, PRISM integration, wallet integration process docs, portal, scripts, and access-pack manifest |
| **Access Packs Catalog** | [dist/access-packs-catalog.zip](dist/access-packs-catalog.zip) | 28 AP-* access packs for SDK, wallet, RPC, intelligence, DX, learn, examples, agents, token, HELIX, and data |
| **Mastermind First Access Pack** | [dist/mastermind-first-access-pack.zip](dist/mastermind-first-access-pack.zip) | First Access terminal vector and hosted manifest used by PRISM `clrt pack download mastermind` |

---

## SDK suite (included in full bundle)

| SDK | Path | Language |
|-----|------|----------|
| CLRTYWallet | [wallet-integration/src/clrty-wallet.ts](wallet-integration/src/clrty-wallet.ts) | TypeScript |
| 10-line integrate | [integration-package/sdk/integrate.ts](integration-package/sdk/integrate.ts) | TypeScript |
| SDK kernel | [sdk/clarity-wallet/src/sdk.ts](sdk/clarity-wallet/src/sdk.ts) | TypeScript (Execute/Predict/Identity) |
| Full kernel tree | [sdk/clarity-wallet/src/](sdk/clarity-wallet/src/) | wallet, rpc, dev, simulation |
| TypeScript client | [sdk/typescript/index.ts](sdk/typescript/index.ts) | TypeScript |
| Python client | [sdk/python/clrty_client.py](sdk/python/clrty_client.py) | Python |
| Rust client | [sdk/rust/clrty-client/](sdk/rust/clrty-client/) | Rust |
| Go client | [sdk/go/clrty/](sdk/go/clrty/) | Go |
| OpenAPI spec | [sdk/openapi/clrty-api.yaml](sdk/openapi/clrty-api.yaml) | REST contract |

## Complete Wallet Process

```bash
git clone https://github.com/clarity-fintech/wallet_integration.git
cd wallet_integration
unzip dist/wallet-sdk-downloads.zip -d /tmp/clrty-wallet-sdk
unzip dist/wallet-process-pack.zip -d /tmp/clrty-wallet-process

git clone https://github.com/clarity-fintech/clarity_prism_cli.git
cd clarity_prism_cli
clrt account create --username alice --entity "Acme" --email ops@acme.com --intent wallet
clrt wallet connect --address 0x1234567890123456789012345678901234567890
clrt pack download wallet-integration
```

---

## Access packs (28 packs)

Manifest: [downloads/access_packs_manifest.json](downloads/access_packs_manifest.json)

| Pack | Name |
|------|------|
| AP-WALLET-INT | Turn-Key Integration Kit |
| AP-WALLET-01/02/03 | Wallet integration tiers |
| AP-WALLET-DIR | Wallet directory |
| AP-SDK-FULL | Full SDK bundle (JS/PY/Rust/Go) |
| AP-SDK-JS/PY/RUST/GO | Per-language SDK |
| AP-FULL | Complete ecosystem pack |
| AP-LEARN-01 | Learn chapters |
| … | See manifest for all 28 |

---

## Audit & data room (Phase 3 — N19)

| Document | Path |
|----------|------|
| Audit data room index | [docs/audit/audit_data_room.md](docs/audit/audit_data_room.md) |
| Internal audit report | [docs/audit/internal_audit_report.md](docs/audit/internal_audit_report.md) |
| Security audit gates | [docs/audit/SECURITY_AUDIT_COMPLETION_GATES.md](docs/audit/SECURITY_AUDIT_COMPLETION_GATES.md) |
| Investor security summary | [docs/audit/INVESTOR_SECURITY_SUMMARY.md](docs/audit/INVESTOR_SECURITY_SUMMARY.md) |

---

## 25 Leverage Nodes checklist

[wallet-integration/docs/IMPLEMENTATION_CHECKLIST.md](wallet-integration/docs/IMPLEMENTATION_CHECKLIST.md)

| Phase | Items | Status |
|-------|-------|--------|
| 1 Foundation | Hierarchy, registry, SDK, UX/compliance | N01–N08 |
| 2 Execution | Portability, ZK-hooks, institutional, MM RFP | N09–N17 |
| 3 Launch | Outreach, data room, stress, DNS | N18–N25 |

```bash
make verify    # 25/25 + rebuild both ZIPs
```

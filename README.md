# shibui-agent

Small npm launcher alias for the Shibui agent CLI.

The actual agent package is [`@shibuitravel/agent`](https://www.npmjs.com/package/@shibuitravel/agent). This package exists so users and automation can run a short unscoped npm command:

```bash
npx -y shibui-agent
```

For repeated use, install globally:

```bash
npm install -g shibui-agent
shibui-agent
```

To pass arguments through to Shibui:

```bash
npx -y shibui-agent --version
npx -y shibui-agent --help
SHIBUI_OFFLINE=1 npx -y shibui-agent list
```

## Notes

- Requires Node.js 20.6 or newer.
- Delegates execution to `@shibuitravel/agent`.
- The underlying CLI command remains `shibui` when installing `@shibuitravel/agent` directly.

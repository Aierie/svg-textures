import preact from '@preact/preset-vite';
import alias from '@rollup/plugin-alias';

const config = {
  jsx: {
    "jsx": "react-jsx",
    "jsxImportSource": "preact",
  },
  plugins: [preact()],
}

export default config
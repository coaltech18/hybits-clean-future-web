import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

const root = createRoot(document.getElementById("root")!);
root.render(<App />);

// Remove the initial loader after React mounts
const loader = document.getElementById('global-loader');
if (loader) loader.remove();

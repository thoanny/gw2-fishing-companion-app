import "./styles.css";
import { getVersion } from '@tauri-apps/api/app';
const appVersion = await getVersion();
document.getElementById('app-version').innerText = appVersion;

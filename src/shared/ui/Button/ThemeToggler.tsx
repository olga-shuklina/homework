import { useTheme } from '../../lib/theme/ThemeProvider';
import Styles from '../../../index.module.css';
import "./themetoggler.module.css";
function ThemeToggler() {
  const { theme, setTheme } = useTheme();

  const handleSwitchTheme = () => {
    if (theme === 'dark') {
      setTheme('light');
    } else {
      setTheme('dark');
    }
  };

  return (
    <button className={Styles.simpleToggler} onClick={handleSwitchTheme}>
      <div className={Styles.ball} data-theme={theme} />
      {theme}
    </button>
  );
}
export default ThemeToggler;
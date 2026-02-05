
import { useTheme } from '../../../shared/lib/theme/ThemeProvider';
import Styles from './postcard.module.css';
import './postcard.module.css'
interface PostCardProps{
    id: number;
    name: string;
    url:string;
}
const option_1 = Styles.dark;
const option_2 = Styles.light;


const PostCard = ({id,name,url}:PostCardProps)=>{
    const { theme } = useTheme();
    const value = theme === 'dark' ? option_1 : option_2;
    return(
        <li className={value}>
            <p> Id Card {id}</p>
            <p>Name Post {name}</p>
            <p>URL for Post {url}</p>
            <p>------------------</p>
        </li>     
    );
};
export default PostCard;

interface PostCardProps{
    id: number;
    name: string;
    url:string;
}
const PostCard = ({id,name,url}:PostCardProps)=>{
    return(

        <li>
            <p> Id Card {id}</p>
            <p>Name Post {name}</p>
            <p>URL for Post {url}</p>
            <p>------------------</p>
        </li>
    );
};
export default PostCard;
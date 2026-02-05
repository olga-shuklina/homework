
import PostCard from "../../entities/post/ui/PostCard";
const ListItem =
        
            [{id:1, url:'post1', name:'Post 1'},
             {id:2, url:'post2', name:'Post 2'},
             {id:3, url:'post3', name:'Post 3'},
             
            ];
    

function PostList() {
  return (    
    <header>
        <h3>Post List</h3>
        <ul>
   {ListItem.map(item => (
               
                <PostCard id={item.id} name={item.name} url={item.url}/>
                
                     
            ))}
       
        </ul>
    </header>
  );
};

export default PostList;
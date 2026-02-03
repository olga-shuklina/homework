
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
            {ListItem.map(item => ( <li key={item.url}>
                {item.name}
                </li>         
            ))}
        </ul>
    </header>
  );
};

export default PostList;
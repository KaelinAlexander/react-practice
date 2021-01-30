import { useState } from 'react';

const Home = () => {

    const [blogs, setBlogs] = useState([
        {title: 'Sample Blog 1', body: 'Pokem ipsum dolor sit amet Typhlosion Rare Candy Mew Durant Crustle Foongus. Fire Hoothoot Razor Leaf Pewter City Murkrow Drapion Vine Whip.', author: 'Kaelin', id: 1},
        {title: 'Sample Blog 2', body: 'Pokem ipsum dolor sit amet Typhlosion Rare Candy Mew Durant Crustle Foongus. Fire Hoothoot Razor Leaf Pewter City Murkrow Drapion Vine Whip.', author: 'Kaelin', id: 2},
        {title: 'Sample Blog 3', body: 'Pokem ipsum dolor sit amet Typhlosion Rare Candy Mew Durant Crustle Foongus. Fire Hoothoot Razor Leaf Pewter City Murkrow Drapion Vine Whip.', author: 'Kaelin', id: 3}
    ]);

    return ( 
        <div className="home">
            {blogs.map((blog) => (
                <div className="blog-preview" key={blog.id}>
                    <h2>{blog.title}</h2>
                    <p>Wirtten by {blog.author}</p>
                </div>
            ))}
        </div>
     );
}
 
export default Home;
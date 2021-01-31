import { useState, useEffect } from 'react';
import BlogList from './BlogList';

const Home = () => {

    const [blogs, setBlogs] = useState([
        {title: 'Sample Blog 1', body: 'Pokem ipsum dolor sit amet Typhlosion Rare Candy Mew Durant Crustle Foongus. Fire Hoothoot Razor Leaf Pewter City Murkrow Drapion Vine Whip.', author: 'Kaelin', id: 1},
        {title: 'Sample Blog 2', body: 'Pokem ipsum dolor sit amet Typhlosion Rare Candy Mew Durant Crustle Foongus. Fire Hoothoot Razor Leaf Pewter City Murkrow Drapion Vine Whip.', author: 'Justin', id: 2},
        {title: 'Sample Blog 3', body: 'Pokem ipsum dolor sit amet Typhlosion Rare Candy Mew Durant Crustle Foongus. Fire Hoothoot Razor Leaf Pewter City Murkrow Drapion Vine Whip.', author: 'Kaelin', id: 3}
    ]);

    const [name, setName] = useState('Kaelin');

    const handleDelete = (id) => {
        const newBlogs = blogs.filter((blog) => blog.id !== id);
        setBlogs(newBlogs);
    }

    useEffect(() => {
        console.log(name)
    }, [name]);

    return ( 
        <div className="home">
            <BlogList blogs={blogs} title="All Blogs" />
            <BlogList blogs={blogs.filter((blog) => blog.author === "Kaelin" )} title="Kaelin's Blogs" handleDelete={handleDelete} />
            <button onClick={() => setName('Kaelin Alexander')}>Change Name</button>
            <p>{ name }</p>
        </div>
     );
}
 
export default Home;
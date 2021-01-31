import { useState } from 'react';
import BlogList from './BlogList';

const Home = () => {

    const [blogs, setBlogs] = useState([
        {title: 'Sample Blog 1', body: 'Pokem ipsum dolor sit amet Typhlosion Rare Candy Mew Durant Crustle Foongus. Fire Hoothoot Razor Leaf Pewter City Murkrow Drapion Vine Whip.', author: 'Kaelin', id: 1},
        {title: 'Sample Blog 2', body: 'Pokem ipsum dolor sit amet Typhlosion Rare Candy Mew Durant Crustle Foongus. Fire Hoothoot Razor Leaf Pewter City Murkrow Drapion Vine Whip.', author: 'Kaelin', id: 2},
        {title: 'Sample Blog 3', body: 'Pokem ipsum dolor sit amet Typhlosion Rare Candy Mew Durant Crustle Foongus. Fire Hoothoot Razor Leaf Pewter City Murkrow Drapion Vine Whip.', author: 'Kaelin', id: 3}
    ]);

    return ( 
        <div className="home">
            <BlogList blogs={blogs} title="All Blogs" />
        </div>
     );
}
 
export default Home;
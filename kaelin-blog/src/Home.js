import { useState } from 'react';

const Home = () => {

    const [name, setName] = useState('Kaelin');
    const [age, setAge] = useState(35)

    const handleClick = (name, e) => {
        setName('Kaelin Alexander')
        setAge(age + 1)
        console.log('Hello, ' + name + '!')
    }

    return ( 
        <div className="home">
            <h2>Homepage</h2>
            <p>{ name } is { age } years old!</p>
            <button onClick={(e) => handleClick('Kaelin Alexander', e)}>Click Me</button>
        </div>
     );
}
 
export default Home;
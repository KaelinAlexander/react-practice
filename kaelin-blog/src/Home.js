const Home = () => {

    const handleClick = (name, e) => {
        console.log('Hello, ' + name + '!')
        console.log(e)
    }

    return ( 
        <div className="home">
            <h2>Homepage</h2>
            <button onClick={(e) => handleClick('Kaelin Alexander', e)}>Click Me</button>
        </div>
     );
}
 
export default Home;
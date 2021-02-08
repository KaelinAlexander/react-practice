const Create = () => {
    return ( 
        <div className="create">
            <h2>Add a New Blog</h2>
            <form>
                <label>Blog Title:</label>
                <input
                type="text"
                required
                />
                <label>Blog Body:</label>
                <textarea
                required
                ></textarea>
                <label>Blog Author:</label>
                <select>
                    <option value="Kaelin">Kaelin</option>
                    <option value="Justin">Justin</option>
                </select>
                <button>Add Blog</button>
            </form>
        </div>
     );
}
 
export default Create;
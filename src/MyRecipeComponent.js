import checkmark from './check.png';

function MyRecipyComponent({id, label, image, calories, ingredients}) {
    return (
        <div key={id} className='card'>
            <div className="list">
                <h2>{label}</h2>
            </div >

                <div className="list">
                    <img src = {image} alt = "food" className='foodimg'/>
                </div>
                
                <div className="list">
                    <ul>
                        {ingredients.map(ingredient => (
                            <li>
                                <img src= {checkmark} className="check" alt = "check"/>
                                {ingredient}
                            </li>)
                        )}
                        
                    </ul>
                </div>


                <div className="list">
                    <p>{calories.toFixed()} calories</p>
                    
                </div>
        </div>
    )
}
export default MyRecipyComponent
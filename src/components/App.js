import React, { useEffect, useState} from "react";

const App = () => {
    const [dogImage, setDogImage] = useState(null);

    useEffect(() =>{
        const fetchDogImage = async () => {
            try {
                const response = await fetch ("https://dog.ceo/api/breeds/image/random");
                const data = await response.json();
                setDogImage(data.message);
            } catch (error) {
                console.log(error);
            }
        };

        fetchDogImage();
}, []);

return (
    <div>
        {dogImage? (
            <img src = {dogImage} alt='A Random Dog'/>
        ): (
            <p>Loading...</p>
        )}
    </div>
 );
};

export default App;



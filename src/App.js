import "./styles.css";
import React, { useState } from "react";

const bestPlaces = {
  NorthIndia: [
    {
      name: "Shimla,Himanchal Pradesh",
      month: "March-June,November-February ⛄",
      img:
        "https://www.fabhotels.com/blog/wp-content/uploads/2019/04/Shimla1.jpg"
    },
    {
      name: "Kullu & Manali,,Himanchal Pradesh",
      month: "March-June,December-February ⛄",
      img:
        "https://www.fabhotels.com/blog/wp-content/uploads/2019/04/Manali1-1.jpg"
    },

    {
      name: "Mussoorie and Dehradun, Uttarakhand",
      month: "March-June,December-February",
      img:
        "https://www.fabhotels.com/blog/wp-content/uploads/2019/09/Mussoorie1.jpg"
    },
    {
      name: "Haridwar and Rishikesh, Uttarakhand",
      month: "March-June,October-November",
      img:
        "https://www.fabhotels.com/blog/wp-content/uploads/2019/09/Haridwar1.jpg"
    },
    {
      name: "Mathura and Vrindavan, Uttar Pradesh",
      month: "October-March",
      img:
        "https://www.fabhotels.com/blog/wp-content/uploads/2019/04/Mathura-and-Vrindavan.jpg"
    }
  ],

  SouthIndia: [
    {
      name: "Coorg, Karnataka",
      month: "October- March",
      img:
        "https://www.fabhotels.com/blog/wp-content/uploads/2019/09/Coorg-1.jpg"
    },
    {
      name: "Wayanad, Kerala",
      month: "October-May",
      img:
        "https://www.fabhotels.com/blog/wp-content/uploads/2019/09/Wayanad-1.jpg"
    },
    {
      name: "Hampi, Karnataka",
      month: "October-February",
      img:
        "https://www.fabhotels.com/blog/wp-content/uploads/2019/09/Hampi-1.jpg"
    },
    {
      name: "Munnar, Kerala",
      month: "October-May",
      img:
        "	https://www.fabhotels.com/blog/wp-content/uploads/2019/09/Munnar-Kerala-1.jpg"
    },
    {
      name: "Tirupati, Andhra Pradesh",
      month: " September-February",
      img:
        "	https://www.fabhotels.com/blog/wp-content/uploads/2019/09/Tirupati-Andhra-Pradesh-1.jpg"
    }
  ],
  NorthEastIndia: [
    {
      name: "Nathula Pass, Sikkim",
      month: "May-October",
      img:
        "https://www.fabhotels.com/blog/wp-content/uploads/2018/09/Nathula-Pass.jpg"
    },
    {
      name: "Tsomgo Lake, Sikkim",
      month: "March-May",
      img:
        "https://www.fabhotels.com/blog/wp-content/uploads/2018/09/Tsomgo-Lake.jpg"
    },
    {
      name: "Ziro Valley, Arunachal Pradesh",
      month: "March-October",
      img:
        "	https://www.fabhotels.com/blog/wp-content/uploads/2018/09/Ziro-Valley.jpg"
    },
    {
      name: "Pelling, Sikkim",
      month: "September-May",
      img:
        "https://www.fabhotels.com/blog/wp-content/uploads/2018/09/Pelling.jpg"
    },
    {
      name: "Shillong, Meghalaya",
      month: " September-May",
      img:
        "https://www.fabhotels.com/blog/wp-content/uploads/2018/09/Shillong.jpg"
    }
  ]
};
export default function App() {
  const [selectedGenre, setGenre] = useState("NorthIndia");
  function onClickHandler(genre) {
    setGenre(genre);
  }
  return (
    <div className="App">
      <h1>FAB PLACES</h1>
      <p>
        Beautiful Places to Visit In India
        <br />
        Have a look at the beauty...!
      </p>
      <div>
        {Object.keys(bestPlaces).map((genre) => (
          <button onClick={() => onClickHandler(genre)}>{genre}</button>
        ))}
      </div>
      <hr />
      <div className="container">
        <ul>
          {bestPlaces[selectedGenre].map((places) => (
            <li key={places.name} className="list">
              <div className="img">
                <img src={places.img} alt="imge" />
              </div>
              <div className="name">{places.name} </div>
              <div className="month">
                <h3> {"Best Time to Visit: "} </h3>

                {places.month}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

import imgmilk from "../../assets/img/desktop/image-gallery-milkbottles.jpg";
import imgorange from "../../assets/img/desktop/image-gallery-orange.jpg";
import imgcone from "../../assets/img/desktop/image-gallery-cone.jpg";
import imgsugar from "../../assets/img/desktop/image-gallery-sugarcubes.jpg";
import imgmilkmobile from "../../assets/img/mobile/image-gallery-milkbottles.jpg";
import imgorangemobile from "../../assets/img/mobile/image-gallery-orange.jpg";
import imgconemobile from "../../assets/img/mobile/image-gallery-cone.jpg";
import imgsugarmobile from "../../assets/img/mobile/image-gallery-sugar-cubes.jpg";

export default function CardGallery() {
  const photos = [
    {
      id: 1,
      name: "Milk",
      photo: imgmilk,
      photo_mobile: imgmilkmobile,
    },
    {
      id: 2,
      name: "Orange",
      photo: imgorange,
      photo_mobile: imgorangemobile,
    },
    {
      id: 3,
      name: "Cone",
      photo: imgcone,
      photo_mobile: imgconemobile,
    },
    {
      id: 4,
      name: "Sugar",
      photo: imgsugar,
      photo_mobile: imgsugarmobile,
    },
  ];

  return (
    <div className="grid grid-cols-4 max-md:grid-cols-2">
      {photos.map((photo) => (
        <div key={photo.id}>
          <img
            src={photo.photo}
            alt={photo.img}
            className="max-xs:hidden xs:block"
          />
          <img src={photo.photo_mobile} alt={photo.img} className="xs:hidden" />
        </div>
      ))}
    </div>
  );
}

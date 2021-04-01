import React, { useState } from "react";

const PhotoList = ({ category }) => {
  const [photos] = useState([
    {
      name: "Grocery aisle",
      category: "commercial",
      description: "Lorem ipsum dolor sit amet",
    },
    {
      name: "Grocery booth",
      category: "commercial",
      description: "Lorem ipsum dolor sit amet, consectetur",
    },
    {
      name: "Building exterior",
      category: "commercial",
      description: "Lorem ipsum",
    },
    {
        name: 'Restaurant Table',
        category: 'commercial',
        description: 'Lorem ipsum table'
    },
    {
        name: 'Cafe interior',
        category: 'commercial',
        description: 'Lorem ipsum cafe'
    },
    {
      name: "Cat green eyes",
      category: "portraits",
      description: "Lorem ipsum dolor",
    },
    {
      name: "Green parrot",
      category: "portraits",
      description: "Lorem ipsum",
    },
    {
        name: 'Yellow macaw',
        category: 'portraits',
        description: 'Lorem ipsum macaw'
    },
    {
      name: "Pug smile",
      category: "portraits",
      description: "Lorem ipsum",
    },
    {
      name: "Pancakes",
      category: "food",
      description: "Lorem ipsum pancake",
    },
    {
      name: "Burrito",
      category: "food",
      description: "Lorem ipsum burrito",
    },
    {
      name: "Scallop pasta",
      category: "food",
      description: "Lorem Ipsum scallop pasta",
    },
    {
      name: "Burger",
      category: "food",
      description: "Lorem Ipsum burger",
    },
    {
      name: "Fruit bowl",
      category: "food",
      description: "Lorem ipsum fruit bowl",
    },
    {
      name: "Green river",
      category: "landscape",
      description: "Lorem ipsum green river",
    },
    {
      name: "Docks",
      category: "landscape",
      description: "Lorem ipsum docks",
    },
    {
      name: "Panoramic village by sea",
      category: "landscape",
      description: "Lorem ipsum panoramic village",
    },
    {
      name: "Domestic landscape",
      category: "landscape",
      description: "Lorem ipsum domestic landscape",
    },
    {
      name: "Park bench",
      category: "landscape",
      description: "Lorem ipsum park bench",
    },
  ]);

  const currentPhotos = photos.filter((photo) => photo.category === category);

  return (
    <div>
      <div className="flex-row">
        {currentPhotos.map((image, i) => (
          <img
            src={require(`../../assets/small/${category}/${i}.jpg`).default}
            alt={image.name}
            className="img-thumbnail mx-1"
            key={image.name}
          />
        ))}
      </div>
    </div>
  );
};

export default PhotoList;

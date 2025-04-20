// ImageList.tsx
import { useAppDispatch } from "../../../app/hooks";
import Image from "./Image/Image";
import styles from "./ImageList.module.scss";
import {
  addViewportElement
} from "../../../app/slices/slidesSlice";
import { ElementFactory } from "../../../Core/Models/FancyElements/ElementFactory";
import React, { useState } from "react";
import {SearchInput} from "../../UI/SearchInput";
import { FaSearch } from "react-icons/fa";

function ImageList() {
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const numberOfImages = 50;
  const dispatch = useAppDispatch();

  const getImageData = () => {
    return Array.from({ length: numberOfImages }, (_, index) => ({
      id: index + 1,
      path: `https://picsum.photos/200/300?random=${index + 1}${searchTerm ? `&search=${searchTerm}` : ''}`,
      alt: `Image ${index + 1}`,
    }));
  };

  const imageData = getImageData();

  const handleAddImage = (path: string) => {
    const elem = ElementFactory.createElement("image", { url: path});
    dispatch(addViewportElement(elem));
  };

  const handleSearch = (value: string) => {
    setLoading(true);
    setSearchTerm(value);
    // Simulate loading
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  };

  return (
      <div className={styles.imagesList}>
        <SearchInput
            placeholder="Search images..."
            onSearch={handleSearch}
            icon={<FaSearch /> as React.ReactNode}
        />
        {loading ? (
            <div className={styles.loader}>Loading...</div>
        ) : (
            <div className={styles.imagesContainer}>
              {imageData.map((image) => (
                  <Image key={image.id} path={image.path} onImageClick={handleAddImage} />
              ))}
            </div>
        )}
      </div>
  );
}

export default ImageList;
import React, { useState } from "react";

export const AppContext = React.createContext();
import Assets from "../Assets/assets.json";
import Axios from "../../utils/Api";
export default function AppContextProvider(props) {
  const [inputVal, setInputVal] = useState("Nature");
  const [selectedImg, setSelectedImg] = useState({});
  const [isModalVisible, setModalVisible] = useState(false);
  const [imgArr, setImgArr] = useState(Assets.photos);

  const updateInputVal = (val) => {
    setInputVal(val);
    Axios.get(`search?query=${val}&per_page=${40}`)
      .then((res) => {
        if (res?.data.photos) {
          setImgArr(res.data.photos);
        }
      })
      .catch((res) => console.error(res));
  };
  const value = {
    selectedImg,
    setSelectedImg,
    imgArr,
    isModalVisible,
    setModalVisible,
    inputVal,
    updateInputVal,
  };
  return (
    <AppContext.Provider value={value}>{props.children}</AppContext.Provider>
  );
}

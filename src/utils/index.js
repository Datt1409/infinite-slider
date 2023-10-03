export const initialCards = [
  {
    url: "/Slider/earth.jpg",
    day: "Ngành . 1 Mar 2023",
    title: "TOP useful office software for programmers.",
    id: 1,
  },
  {
    url: "/Slider/city.jpg",
    day: "Ngành . 1 Mar 2023",
    title: "TOP useful office software for programmers.",
    id: 2,
  },
  {
    url: "/Slider/computer.jpg",
    day: "Ngành . 1 Mar 2023",
    title: "TOP useful office software for programmers.",
    id: 3,
  },
  {
    url: "/Slider/mobile_phone.jpg",
    day: "Ngành . 1 Mar 2023",
    title: "TOP useful office software for programmers.",
    id: 4,
  },
];

export const findPointerIndex = (arr, targetId) => {
  let firstIndex = -1;
  let secondIndex = -1;
  let startIndex = 0;
  let count = 0;

  if (arr[startIndex].id === targetId) {
    startIndex++;
  }

  for (let i = startIndex; i < arr.length; i++) {
    if (arr[i].id === targetId) {
      count++;
      if (count === 1) {
        firstIndex = i;
      } else if (count === 2) {
        secondIndex = i;
      }
    }
  }

  return { firstIndex, secondIndex };
};

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

export const findMiddleIndex = (arr, targetId) => {
  let startIndex = 0;
  if (arr[startIndex].id === targetId) {
    startIndex++;
  }
  const index = arr.findIndex(
    (item, i) => i > startIndex && item.id === targetId
  );
  return index;
};

export const findRightIndex = (arr, targetId) => {
  let startIndex = 0;
  let count = 0;
  if (arr[startIndex].id === targetId) {
    startIndex++;
  }

  for (let i = startIndex; i < arr.length; i++) {
    if (arr[i].id === targetId) {
      count++;

      if (count === 2) {
        return i;
      }
    }
  }
};

export const findMovePrevIndex = (arr, target) => {
  let firstIndex = -1;
  let secondIndex = -1;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i].id === target) {
      firstIndex = i;
      break;
    }
  }

  if (firstIndex !== -1) {
    for (let i = firstIndex + 1; i < arr.length; i++) {
      if (arr[i].id === target) {
        secondIndex = i;
        break;
      }
    }
  }

  return { firstIndex, secondIndex };
};

const setLocalStorage = (key, value) => {
  localStorage.setItem(key, value);
};

const getLocalStorage = (key) => {
  return localStorage.getItem(key);
};

const removeLocalStorage = (key) => {
  localStorage.removeItem(key);
};

const createBtn = document.getElementById("create-btn");
createBtn.addEventListener("click", () => {
  setLocalStorage(
    "tvShows",
    JSON.stringify([
      {
        name: "The Crown",
      },
      {
        name: "Deerry Girls",
      },
      {
        name: "The Expanse",
      },
      {
        name: "The Peripheral",
      },
    ])
  );
});

const delBtn = document.getElementById("del-btn");
delBtn.addEventListener("click", () => {
  removeLocalStorage("tvShows");
});

const valueDisplay = document.getElementById("value-display");
valueDisplay.textContent = JSON.parse(getLocalStorage("tvShows"))[2].name;

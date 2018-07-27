"use-strict";

// get saved stories
const getSavedStories = () => {
  const storyJSON = localStorage.getItem("stories");

  try {
    return storyJSON ? JSON.parse(storyJSON) : [];
  } catch (e) {
    return [];
  }
};

// save a story
const saveStory = stories => {
  localStorage.setItem("stories", JSON.stringify(stories));
};

// typewriter effect
const showStory = story => {
  const display = document.querySelector(".interact__display");
  display.style.padding = ".2rem";
  display.textContent = story.text;
};

// render the stories
const render = story => {
  const storyBox = document.querySelector(".story__box");
  storyBox.innerHTML = "";
  story.forEach(story => storyBox.appendChild(generateDOM(story)));
};

/*
// update story
const updateStory = (id, text) => {
  // add the edited story to the existing one.
  const storyIndex = stories.findIndex(story => story.id === id);
  if (storyIndex > -1) {
    stories.forEach(story => {
      story.text = text;
    });
  }
};
*/

// edit story
const editStory = (id, text) => {
  const storyIndex = stories.findIndex(story => story.id === id);

  if (storyIndex > -1) {
    const textarea = document.querySelector("#text-input");
    textarea.value = text;
    // updateStory(id, text); fix this fn
    // check for the story id and update rather than create new element
  }
};

// remove a story
const removeStory = id => {
  const storyIndex = stories.findIndex(story => story.id === id);

  if (storyIndex > -1) {
    stories.splice(storyIndex, 1);
  }
};

// generate DOM
const generateDOM = story => {
  const labelEl = document.createElement("label");
  const spanEl = document.createElement("span");
  const editIcon = document.createElement("i");
  const removeIcon = document.createElement("i");

  // Add text
  labelEl.textContent = story.text;

  // set class attributes
  labelEl.classList.add("story");
  // labelEl.setAttribute('id', `${}`)
  spanEl.classList.add("remove");
  editIcon.setAttribute("class", "fas fa-pencil-alt edit");
  removeIcon.setAttribute("class", "fas fa-cut cut");

  // append by order
  spanEl.appendChild(editIcon);
  spanEl.appendChild(removeIcon);
  labelEl.appendChild(spanEl);

  // setup the remove story
  removeIcon.addEventListener("click", () => {
    removeStory(story.id);
    saveStory(stories);
    render(stories);
  });

  // set up edit story
  editIcon.addEventListener("click", () => {
    editStory(story.id, story.text);
  });

  return labelEl;
};

// get user input
// diplay it on black_box while they are typing
// when they are done and submit, generate the appropraite dom structure and attach it

// Let's get started
let stories = getSavedStories();
const storyWriter = document.querySelector("#story__writer");

const userStory = {
  text: "",
  id: "id-"
};

// show existing stories
render(stories);

// Get user text when they submit
storyWriter.addEventListener("submit", e => {
  e.preventDefault();

  const display = document.querySelector(".interact__display");

  const text = e.target.elements.textarea.value.trim();

  if (text.length > 0) {
    stories.push({
      text,
      id: uuidv4()
    });

    e.target.elements.textarea.value = "";
    display.textContent = "";
    display.style.padding = "0";

    saveStory(stories);
    render(stories);
  }
});

// typewritter effect
storyWriter.addEventListener("keyup", e => {
  userStory.text = e.target.value.trim();
  showStory(userStory);
});

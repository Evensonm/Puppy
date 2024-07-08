// Use the API_URL variable to make fetch requests to the API.
// Replace the placeholder with your cohort name (ex: 2109-UNF-HY-WEB-PT)
const cohortName = "2404-FTB-ET-WEB-AM";
const API_URL = `https://fsa-puppy-bowl.herokuapp.com/api/${cohortName}`;

const modal = document.querySelector(".modal");
const modalContent = document.querySelector(".modal-content");
const closeModal = document.querySelector("#close-modal");
const memberContainer = document.getElementById("#member-container")


modal.addEventListener("click", function (e) {
  // closes modal when you click outside the content area of the modal
  console.log(e.target.classList);
  if (!e.target.classList.contains("modal-content")) {
    modal.classList.remove("modal-open");
    modalContent.classList.remove("modal-content-open");
    modalContent.innerHTML = "";
  }
});

/**
 * Fetches all players from the API.
 * @returns {Object[]} the array of player objects
 */
const fetchAllPlayers = async () => {
  try {
    // TODO
    const res = await fetch(
      "https://fsa-puppy-bowl.herokuapp.com/api/2404-FTB-ET-WEB-AM/players"
    );
    /* Remember, if you're using the modal, when you create the details button,
    in th event handler, create functionality that adds the class 'modal-open' to the modal var and 'modal-content-open' to the
    modalContent var */
    const json = await res.json();
    console.log("json",json);
    console.log("data", json.data);
    console.log("players", json.data.players);
    console.log(Array.isArray(json.data));
    console.log(Array.isArray(json.data.players));
    return json.data.players;
  } catch (err) {
    console.error("Uh oh, trouble fetching players!", err);
  }
};

/**
 * Fetches a single player from the API.
 * @param {number} playerId
 * @returns {Object} the player object
 */
const fetchSinglePlayer = async (playerId) => {
  try {
    // TODO
    const res = await fetch(
      `https://fsa-puppy-bowl.herokuapp.com/api/2404-FTB-ET-WEB-AM/players/${player.id}`
    );
  } catch (err) {
    console.error(`Oh no, trouble fetching player #${playerId}!`, err);
  }
};

/**
 * Adds a new player to the roster via the API.
 * @param {Object} playerObj the player to add
 * @returns {Object} the player returned by the API
 */
const addNewPlayer = async (playerObj) => {
  try {
    const res = await fetch(
      "https://fsa-puppy-bowl.herokuapp.com/api/2404-FTB-ET-WEB-AM/players",
      {
        method: "POST",
        body: JSON.stringify(playerObj),
        headers: {
          "Content-type": "application/json",
          Accept: "application/json",
        },
      }
    );
    // TODO
    const json = await res.json();
    renderAllPlayers();
  } catch (err) {
    console.error("Oops, something went wrong with adding that player!", err);
  }
};

/**
 * Removes a player from the roster via the API.
 * @param {number} playerId the ID of the player to remove
 */
const removePlayer = async (playerId) => {
  try {
    const res = await fetch(
      `https://fsa-puppy-bowl.herokuapp.com/api/2404-FTB-ET-WEB-AM/players/${player.id}`,
      {
        method: "DELETE",
      }
    );
    // TODO
  } catch (err) {
    console.error(
      `Whoops, trouble removing player #${playerId} from the roster!`,
      err
    );
  }
};

/**
 * Updates `<main>` to display a list of all players.
 *
 * If there are no players, a corresponding message is displayed instead.
 *
 * Each player is displayed in a card with the following information:
 * - name
 * - id
 * - image (with alt text of the player's name)
 *
 * Additionally, each card has two buttons:
 * - "See details" button that, when clicked, calls `renderSinglePlayer` to
 *    display more information about the player
 * - "Remove from roster" button that, when clicked, will call `removePlayer` to
 *    remove that specific player and then re-render all players
 *
 * Note: this function should replace the current contents of `<main>`, not append to it.
 * @param {Object[]} playerList - an array of player objects
 */
function renderAllPlayers(fetchAllPlayers, container) {
    memberContainer.innerHTML="";
  // TODO
  const playerListHTML = fetchAllPlayers.map((player) => {

    const playerContainer = document.createElement("div");
    const playerParagraph = document.createElement("p");
    const playerImage = document.createElement("img");
    playerImage.src = player.imageUrl;
    playerParagraph.textContent = `${player.id} ${player.name}`;
    playerContainer.appendChild(playerImage);
    playerContainer.appendChild(playerParagraph);
    memberContainer.appendChild(playerContainer);
    
  });
  // when you add a event handler to the buttons, you need to pass an id of the player
  // to the function renderSinglePlayer or removePlayer
  /*
     ...your code(player=>{
      // more code...
        deleteButton.addEventListener("click", function(){
          removePlayer(player.id);
        })
      })

 */
    
  
};

/**
 * Updates `<main>` to display a single player.
 * The player is displayed in a card with the following information:
 * - name
 * - id
 * - breed
 * - image (with alt text of the player's name)
 * - team name, if the player has one, or "Unassigned"
 *
 * The card also contains a "Back to all players" button that, when clicked,
 * will call `renderAllPlayers` to re-render the full list of players.
 * @param {Object} player an object representing a single player
 */
const renderSinglePlayer = (player) => {
  // TODO
};

/**
 * Fills in `<form id="new-player-form">` with the appropriate inputs and a submit button.
 * When the form is submitted, it should call `addNewPlayer`, fetch all players,
 * and then render all players to the DOM.
 */
const renderNewPlayerForm = () => {
  try {
    // TODO
  } catch (err) {
    console.error("Uh oh, trouble rendering the new player form!", err);
  }
};

/**
 * Initializes the app by fetching all players and rendering them to the DOM.
 */
const init = async () => {
  const players = await fetchAllPlayers();
  renderAllPlayers(players, memberContainer);

  renderNewPlayerForm();
};

init();

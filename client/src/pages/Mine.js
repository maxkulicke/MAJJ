import React, { useState, useEffect } from "react";
import { useStoreContext } from "../utils/GlobalState";
import API from "../utils/API";
import { NEW_ITEMS, CREATE_QUEUE } from "../utils/actions";
import MainNav from "../components/MainNav/MainNav";
import LeftNav from "../components/LeftNav/LeftNav";
// import sampleItems from "../utils/sample-items";
import Gems from "../components/Gems/Gems";

// queue = user's list of saved items (DB)
// item = individual Bing return, displayed on card (local)

function Mine() {
  const [state, dispatch] = useStoreContext();
  const { filter, queue, items } = state;

  let newGems = itemizer(items);
  const [gems, setGems] = useState(newGems);
  // const [currentItems, setCurrentItems] = useState(items);

  let flexbox = {
    display: "flex",
    flexDirection: "row",
  };

  useEffect(() => {
    // console.log(filter);
    loadItems();
  }, [filter]);

  useEffect(() => {
    // console.log(queue);
  }, [queue]);

  useEffect(() => {
    let newGems = itemizer(items);
    setGems(newGems);
  }, [items]);

  function createQueue() {
    const newQueue = [];
    dispatch({
      type: CREATE_QUEUE,
      queue: newQueue,
    });
  }

  async function loadItems() {
    let arr = [];
    if (filter) {
      arr = await API.getItems(filter);
    } else {
      arr = await API.getItems();
    }
    const items = [];
    arr.map(async (element) => {
      var topic = element;
      topic.data.value.forEach((newsObject) => {
        items.push(newsObject);
      });
    });
    shuffle(items);
    dispatch({
      type: NEW_ITEMS,
      items: items,
    });
  }

  // knuth shuffle
  function shuffle(array) {
    var currentIndex = array.length,
      temporaryValue,
      randomIndex;
    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    return array;
  }

  function itemizer(items) {
    let newGems = Object.keys(items).map((key) => (
      <Gems key={key} details={items[key]} />
    ));
    return newGems;
  }

  //would like to dry this up
  // if (items) {
  return (
    <div>
      <MainNav />
      <div className="flexbox-containter" style={flexbox}>
        <LeftNav />

        {gems}
      </div>
    </div>
  );
}

export default Mine;

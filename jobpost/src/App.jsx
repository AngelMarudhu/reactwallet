import { useEffect, useState } from "react";
import JobListing from "./components/JobListing";
import "./css/Joblist.css";

const API_ENDPOINT = "https://hacker-news.firebaseio.com/v0";
const ITEMS_PER_PAGE = 6;

function App() {
  const [items, setItems] = useState([]);
  const [listId, setListId] = useState(null);
  const [currentPage, setCurrentPage] = useState(0);
  const [fetchingItems, setFetchingItems] = useState(false);

  async function fetchItems(curPage) {
    setCurrentPage(curPage);
    setFetchingItems(true);

    let itemsList = listId;
    if (itemsList === null) {
      const response = await fetch(`${API_ENDPOINT}/jobstories.json`);
      itemsList = await response.json();
      setListId(itemsList);
    }

    let sliceIndex = itemsList.slice(
      curPage * ITEMS_PER_PAGE,
      curPage * ITEMS_PER_PAGE + ITEMS_PER_PAGE
    );

    let fetchItemForPage = await Promise.all(
      sliceIndex.map((itemId) => {
        return fetch(`${API_ENDPOINT}/item/${itemId}.json`).then((res) =>
          res.json()
        );
      })
    );

    setItems(
      [...items, ...fetchItemForPage].reduce((acc, item) => {
        let isDublicate = false;
        for (let i = 0; i < acc.length; i++) {
          if (acc[i].id === item.id) {
            isDublicate = true;
            break;
          }
        }

        if (!isDublicate) {
          acc.push(item);
        }
        return acc;
      }, [])
    );
    setFetchingItems(false);
  }

  const loadMoreHandler = () => {
    setCurrentPage((prev) => prev + 1);
  };

  useEffect(() => {
    fetchItems(currentPage);
  }, [currentPage]);

  // console.log(items);

  return (
    <div>
      <h1>Marudhu Job Board!</h1>

      {items.length < 1 ? (
        <p>Marudhu Loading Wait....</p>
      ) : (
        <div>
          <div role="list">
            {items.map((item) => (
              <JobListing key={item.id} {...item} />
            ))}
          </div>
        </div>
      )}

      {items.length > 0 &&
        currentPage * ITEMS_PER_PAGE + ITEMS_PER_PAGE < listId.length && (
          <button disabled={fetchingItems} onClick={loadMoreHandler}>
            {fetchingItems ? "Loading..." : "Load More"}
          </button>
        )}
    </div>
  );
}

export default App;

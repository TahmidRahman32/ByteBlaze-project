import { useEffect, useState } from "react";
import { getLocalStorage, localStorageDeleteBtn } from "../../Utilitis/Utils";
import BookmarkCard from "./BookmarkCard";
import NotAvailable from "./NotAvailable";


const Bookmark = () => {
   const [bookmarks, setBookmarks] = useState([]);
   useEffect(() => {
      const storedBookmark = getLocalStorage();
      setBookmarks(storedBookmark);
   }, []);

   const handleDelete = (id) => {
      localStorageDeleteBtn(id);
      const storedBookmark = getLocalStorage();
      setBookmarks(storedBookmark);
   };
   if (bookmarks.length === 0)return <NotAvailable />
   return (
      <div className="grid grid-cols-4 gap-8 my-8 justify-start items-center mx-8">
         {bookmarks.map((book) => (
            <BookmarkCard key={book.id} deletable={true} bookmark={book} handleDelete={handleDelete}></BookmarkCard>
         ))}
      </div>
   );
};

export default Bookmark;

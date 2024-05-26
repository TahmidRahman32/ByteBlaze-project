import { RiDeleteBin5Fill } from "react-icons/ri";
import notPoundImg from "../../assets/404.jpg";


const BookmarkCard = ({ bookmark, deletable, handleDelete }) => {
   const { published_at, cover_image, title, description, id } = bookmark;
   // console.log(bookmark);

   return (
      <div>
         <div className="relative max-w-sm mx-auto group hover:no-underline focus:no-underline bg-gray-100 rounded-lg transition border-2 hover:scale-105 border-primary hover:border-secondary border-opacity-30">
            <img role="presentation" className="object-cover  w-full rounded h-44 bg-gray-500" src={cover_image || notPoundImg} />
            <div className="p-6 space-y-2">
               <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">{title}</h3>
               <span className="text-xs text-gray-400">{new Date(published_at).toLocaleDateString()}</span>
               <p>{description}</p>
            </div>
            {deletable && (
               <div onClick={() => handleDelete(id)} className="bg-secondary absolute p-1 rounded-full -top-4 -right-2 border-2 hover:scale-105 hover:bg-gray-300">
                  <RiDeleteBin5Fill size={20} className="text-black" />
               </div>
            )}
         </div>
      </div>
   );
};

export default BookmarkCard;

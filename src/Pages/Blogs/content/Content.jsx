import { useLoaderData } from "react-router-dom";
import notPoundImg from "../../../assets/404.jpg";
import Markdown from "react-markdown";
import rehypeRaw from "rehype-raw";
const Content = () => {
   const content = useLoaderData();

   const {  cover_image, title, tags, body_html } = content;
   console.log(content);
   return (
      <div className="mx-auto group hover:no-underline focus:no-underline rounded-lg    p-2">
         <img role="presentation" className="object-cover  w-full rounded h-44 bg-gray-500" src={cover_image || notPoundImg} />
         <div className="flex flex-wrap py-6 gap-2 border-t border-dashed ">
            {tags.map((tag) => (
               <a key={tag} rel="noopener noreferrer" href="#" className="px-3 py-1 hover:underline  rounded-lg text-gray-900">
                  #{tag}
               </a>
            ))}
         </div>
         <div className="">
            <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">{title}</h3>
            <div>
               <Markdown rehypePlugins={rehypeRaw}>{body_html}</Markdown>
            </div>
         </div>
      </div>
   );
};

export default Content;

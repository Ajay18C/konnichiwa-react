import { CDN_URL } from "../utils/constants";

const ResturantCard = (props) => {
    const {cloudinaryImageId, name, avgRating, cuisines, costForTwo, sla} = props?.resData?.info;
    return (
      <div className="m-6 p-4 w-[250px] bg-orange-100 rounded-xl hover:bg-orange-300 flex flex-col flex-grow">
        <img
          className="rounded-xl size-60"
          alt="res-logo"
          src={
            CDN_URL +
            cloudinaryImageId
          }
        />
        <h3 className="font-bold py-4 text-xl">{name}</h3>
        <ul className="flex flex-wrap text-sm content-between *:rounded-full *:border *:border-sky-100 *:bg-sky-50 *:px-2 *:py-0.5">
        {cuisines.map((x,i) => <li key={i} className="m-1 p-2">{x}</li>)}
        </ul>
        <div className="flex items-center">
        <svg width="16" height="20" fill="currentColor">
          <path d="M7.05 3.691c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.372 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.539 1.118l-2.8-2.034a1 1 0 00-1.176 0l-2.8 2.034c-.783.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.363-1.118L.98 9.483c-.784-.57-.381-1.81.587-1.81H5.03a1 1 0 00.95-.69L7.05 3.69z" />
        </svg> 
        <h4 className="p-2">{avgRating} stars</h4>
        </div>
        <h2 className="text-xl font-bold my-2 border-solid bg-yellow-50 rounded-lg justify-center flex">{costForTwo}</h2>
        <div className="flex justify-start">
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="22" viewBox="0 0 24 24"><path d="M15.91 13.34l2.636-4.026-.454-.406-3.673 3.099c-.675-.138-1.402.068-1.894.618-.736.823-.665 2.088.159 2.824.824.736 2.088.665 2.824-.159.492-.55.615-1.295.402-1.95zm-3.91-10.646v-2.694h4v2.694c-1.439-.243-2.592-.238-4 0zm8.851 2.064l1.407-1.407 1.414 1.414-1.321 1.321c-.462-.484-.964-.927-1.5-1.328zm-18.851 4.242h8v2h-8v-2zm-2 4h8v2h-8v-2zm3 4h7v2h-7v-2zm21-3c0 5.523-4.477 10-10 10-2.79 0-5.3-1.155-7.111-3h3.28c1.138.631 2.439 1 3.831 1 4.411 0 8-3.589 8-8s-3.589-8-8-8c-1.392 0-2.693.369-3.831 1h-3.28c1.811-1.845 4.321-3 7.111-3 5.523 0 10 4.477 10 10z"/></svg>
        <h4 className="px-2">{sla.slaString}</h4>
        </div>
      </div>
    );
};

export default ResturantCard;
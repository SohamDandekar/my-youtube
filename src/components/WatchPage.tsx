import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { clearMenu } from "../utils/appSlice";
import { useEffect } from "react";

const WatchPage = () => {

  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  console.log(searchParams.get("v"));

  useEffect(() => {
    dispatch(clearMenu());
  }, [])
  
  return (
    <div className="m-4">
        <iframe width="1200" height="600" src={"https://www.youtube.com/embed/"+searchParams.get("v")+"?autoplay=1"} title="YouTube video player" allow="autoplay; encrypted-media;" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
    </div>
  )
}

export default WatchPage
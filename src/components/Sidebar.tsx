import { useAppSelector } from "../hooks/useAppSelector";

const Sidebar = () => {

  const isMenuOpen = useAppSelector(store => store.app.isMenuOpen);

  if(!isMenuOpen) return null;

  return (
    <div className="w-48 shadow-lg p-5 mx-4">
      <ul>
        <li>Home</li>
        <li>Shorts</li>
      </ul>
      <h1 className="font-bold pt-5">Subscriptions</h1>
      <ul>
        <li>WWE</li>
        <li>GothamChess</li>
        <li>Playlists</li>
        <li>Official Company</li>
        <li>ChessBase India</li>
      </ul>
      <h1 className="font-bold pt-5">You</h1>
      <ul>
        <li>Your Channel</li>
        <li>History</li>
        <li>Playlists</li>
        <li>Watch Later</li>
        <li>Liked Videos</li>
        <li>Your Videos</li>
        <li>Downloads</li>
      </ul>
    </div>
  )
}

export default Sidebar
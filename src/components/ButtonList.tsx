import Button from "./Button"

const buttonList = ["All", "Live", "Gaming", "Podcasts", "Valorant", "Trending", "Comedy", "Informative", "New to you", "Watched"]

const ButtonList = () => {
  return (
    <div className="flex m-2">
      {buttonList.map((buttonTitle, index) => 
      <Button key={index} title={buttonTitle} />)}
    </div>
  )
}

export default ButtonList;
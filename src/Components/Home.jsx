import Video from "./Video"
import SideBar from "./SideBar"


function Home() {
  return (
    <div className="flex">
      <SideBar/>
      <div>
      <Video/>
      </div>
    </div>
  )
}

export default Home


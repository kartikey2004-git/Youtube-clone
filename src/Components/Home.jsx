import Sidebar from "./SideBar.jsx"
import Video from "./Video";
import { useAuth } from "../context/AuthProvider.jsx";
import ListItems from "./ListItems.jsx";

function Home() {
  const { data, loading } = useAuth();
  console.log(data);

  return (
    <div className="flex flex-col md:flex-row mt-20">
      <Sidebar />
      <div className="w-full md:ml-64 h-[calc(100vh-6.625rem)] overflow-y-scroll overflow-x-hidden">
        <ListItems />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 p-4 md:p-6">
          {!loading &&
            data.map((item) => {
              if (item.type !== "video") return false;
              return <Video key={item.id} video={item?.video} />;
            })}
        </div>
      </div>
    </div>
  );
}

export default Home;

// Completely done hogya ye wala component

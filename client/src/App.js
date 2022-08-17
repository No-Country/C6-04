import ItemTitle from "./pages/home/collections/ItemTitle";
import ItemTrendTitle from "./pages/home/trends/ItemTrendTitle";
import ItemCarousel from "./pages/home/collections/ItemCarousel";
import ItemListTrend from "./pages/home/trends/ItemListTrends";
import ItemButton from './pages/home/trends/ItemButton'




function App() {
  return (
    <div className="App">
      <ItemTitle/>
      <ItemTrendTitle/>
      {/* <ItemCarousel/> */}
      <ItemListTrend/>
      <ItemButton/>
    </div>
  );
}

export default App;

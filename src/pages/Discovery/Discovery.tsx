import { useEffect } from "react";
import HorizontalContainer from "../../components/HorizontalContainer/HorizontalContainer";
import FavouriteDropDown from "../../components/FavouriteDropDown/FavouriteDropDown";
import SectionHeading from "../../components/SectionHeading/SectionHeading";
import { requests } from "../../services/api";
import { useGlobalState } from "../../context/movieContext";
import axios from "axios";
import { API_KEY } from "../../services/api";
import HorizontalContainerHorror from "../../components/HorizontalContainerHorror/HorizontalContainerHorror";
import HorizontalContainerAction from "../../components/HorizontalContainerAction/HorizontalContainerAction";
import HorizontalContainerComedy from "../../components/HorizontalContainerComedy/HorizontalContainerComedy";

const Discovery = () => {
  const { setState } = useGlobalState();
  const { setStateHorror } = useGlobalState();
  const { setStateAction } = useGlobalState();
  const { setStateComedy } = useGlobalState();
  const { state } = useGlobalState();
  const { stateHorror } = useGlobalState();
  const { stateAction } = useGlobalState();
  const { stateComedy } = useGlobalState();

  const getTrendingMovies = async (url: string) => {
    await axios({
      url: url,
      params: {
        api_key: API_KEY,
      },
    }).then((response) => {
      setState(response.data.results);
    });
  };
  const getHorrorMovies = async (url: string) => {
    await axios({
      url: url,
      params: {
        api_key: API_KEY,
      },
    }).then((response) => {
      setStateHorror(response.data.results);
    });
  };
  const getActionMovies = async (url: string) => {
    await axios({
      url: url,
      params: {
        api_key: API_KEY,
      },
    }).then((response) => {
      setStateAction(response.data.results);
    });
  };
  const getComedyMovies = async (url: string) => {
    await axios({
      url: url,
      params: {
        api_key: API_KEY,
      },
    }).then((response) => {
      setStateComedy(response.data.results);
    });
  };

  useEffect(() => {
    getTrendingMovies(requests.fetchTrending);
    getHorrorMovies(requests.fetchHorrorMovies);
    getActionMovies(requests.fetchActionMovies);
    getComedyMovies(requests.fetchComedyMovies);
  }, []);

  return (
    <div className="max-w-screen bg-[#060D17] max-w-screen h-full overflow-x-hidden overscroll-none">
      <SectionHeading text="Newest" icon="🆕" />
      <HorizontalContainer />
      <SectionHeading text="Popular Horrors" icon="🎉" />
      <HorizontalContainerHorror />
      <SectionHeading text="Popular Action" icon="🎉" />
      <HorizontalContainerAction />
      <SectionHeading text="Popular Comedy" icon="🎉" />
      <HorizontalContainerComedy />
      <SectionHeading text="Favorites" icon="💙" />
      <FavouriteDropDown />
    </div>
  );
};

export default Discovery;

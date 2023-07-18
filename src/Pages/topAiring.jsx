import React, { useRef } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import spinner from '../img/spinner.svg';
import Card from '../Components/Card';
import OtherPagesCard from '../Loading/OtherPagesCard';
import { useFetchInitialData } from '../utils/hooks';
import { Helmet } from 'react-helmet';
const TopAnimeAiring = (props) => {
  const ref = useRef(null);

  const handelClick = () => {
    props.handelClick();
  };
  const loadMore = () => {
    props.loadMoreTopAnime();
  };

  const { loading, topanime, loadMoreTopAnime } = props;

  useFetchInitialData(loading, topanime, loadMoreTopAnime, ref, window);

  return (
    <>
      <Helmet>
        <meta property="og:title" content="AnimeTown" />
        <meta
          property="og:description"
          content="AnimeTown is a secure website offering free, high-definition anime streaming and downloads with no ads or subscription requirements. Enjoy dubbed or subbed episodes hassle-free."
        />
        <meta property="og:url" content="https://animetown.fun/" />
        <meta property="og:type" content="website" />

        <meta name="twitter:title" content="AnimeTown" />
        <meta
          name="twitter:description"
          content="AnimeTown is a secure website offering free, high-definition anime streaming and downloads with no ads or subscription requirements. Enjoy dubbed or subbed episodes hassle-free."
        />

        <title>Watch Download Anime For Free On AnimeTrix</title>
      </Helmet>
      {Object.keys(props.recent).length === 0 ? (
        <OtherPagesCard title="Trending" />
      ) : (
        <>
          <section className="movies">
            <div className="filter-bar">
              <div className="heading">
                <h3>Trending</h3>
              </div>
            </div>

            <div className="movies-grid" ref={ref}>
              {props.recent.map((rec) => (
                <Card
                  rec={rec}
                  key={rec.animeId}
                  handelClick={handelClick}
                  ep="false"
                />
              ))}
            </div>
            <InfiniteScroll
              dataLength={props.recent.length}
              next={loadMore}
              hasMore={true}
              loader={<img src={spinner} alt="spinner" className="spinner" />}
            ></InfiniteScroll>
          </section>
        </>
      )}
    </>
  );
};

export default TopAnimeAiring;

import React from 'react';
import Card from '../components/Card';
import SkeletonSneakers from '../components/Card/SkeletonSneakers';
import InfoOnFullPage from '../components/InfoOnFullPage';
import AppContext from '../context';

const Favorites = () => {
  const { sneakersInFavorites, onAdditemToFavorites, onAdditemToCart, isLoading } =
    React.useContext(AppContext);

  const sneakerBlockInFavorites = sneakersInFavorites.map((objSneakersInFavorites) => (
    <Card
      key={objSneakersInFavorites.id}
      {...objSneakersInFavorites}
      addSneakersToCart={(objSneakersToCart) => onAdditemToCart(objSneakersToCart)}
      additemToFavorites={(objSneakersToFavorites) => onAdditemToFavorites(objSneakersToFavorites)}
    />
  ));

  const skeletons = [...new Array(4)].map((_, index) => <SkeletonSneakers key={index} />);

  return (
    <main className="main">
      <section className="hero">
        <div className="hero__container">
          <div className="hero__body">
            <div className="body-hero__title">
              <h1>Мои закладки</h1>
            </div>
          </div>
        </div>
      </section>
      <section className="sneakers">
        <div className="sneakers__container">
          <div className="sneakers__gird">{isLoading ? skeletons : sneakerBlockInFavorites}</div>
        </div>
      </section>
    </main>
  );
};

export default Favorites;

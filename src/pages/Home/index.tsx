import React from "react";
import { Helmet } from "react-helmet-async";
import ProductsList from "@/components/ProductsList";
import { IProduct, SearchProps } from "@/interface";
import LoadingHomePage from "@/components/loaders/LoadingHomePage";
import SearchBar from "@/components/SearchBar";

const Home: React.FC<
  SearchProps & { data: IProduct[]; isLoading: boolean; isError: boolean }
> = ({ searchTerm, setSearchTerm, data, isLoading, isError }) => {
  return isLoading || !data ? (
    <LoadingHomePage />
  ) : isError ? (
    <div>Could not get products. Please try again.</div>
  ) : (
    <>
      <Helmet>
        <title>Infinite Finds - Where Variety Never Ends</title>
        <meta name="description" content="Infinite Finds - home page" />
      </Helmet>
      <SearchBar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        data={data}
        isLoading={isLoading}
        isError={isError}
      ></SearchBar>
      <section>
        <ProductsList data={data} />
      </section>
    </>
  );
};
export default Home;

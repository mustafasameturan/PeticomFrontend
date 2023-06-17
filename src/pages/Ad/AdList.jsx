import React, { useEffect, useState } from "react";
import "../../assets/css/searchresults.css";
import { useLocation, useNavigate } from "react-router-dom";
import { GetAdsByFilter } from "../../services/AdService";
import { Loading, Pagination } from "../../components";
import { AdTableRow } from "./components";

const AdList = () => {

  const location = useLocation();

  const limit = parseInt(process.env.REACT_APP_TABLE_ROW_LIMIT);
  const [start, setStart] = useState(0);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalRecord, setTotalRecord] = useState(0);
  const [ads, setAds] = useState([]);
  const [order, setOrder] = useState(-1);
  const [detailSearch, setDetailSearch] = useState({
    city: -1,
    searchText: "",
    order: -1,
    type: -1
  });

  const getAdsByFilter = async () => {
    const model = {
      start: start,
      limit: limit,
      search: !detailSearch.searchText ? "" : detailSearch.searchText,
      cityId: !detailSearch.city ? -1 : detailSearch.city,
      order: !detailSearch.order ? -1 : detailSearch.order,
      type: detailSearch.type === -1 ? null : detailSearch.type
    };
    
    const result = await GetAdsByFilter(model);

    if (result.statusCode === 200) {
      setAds((ads) => result.data.data);
      setTotalRecord(totalRecord => result.data.recordsTotal);
      setLoading((loading) => false);
    }
  };

  useEffect(() => {
    if (totalRecord !== 0) {
      getAdsByFilter();
      
    }
  }, [start])

  useEffect(() => {
    const filter = JSON.parse(localStorage.getItem("filter"));
    
    setDetailSearch({ searchText: filter.searchText, city: filter.city, order: order, type: filter.type });
  }, [location, order]);

  useEffect(() => {
    let abortController = new AbortController();

    getAdsByFilter();

    return () => {
      abortController.abort();
    };
  }, [detailSearch]);

  return (
    <div className="container mx-auto grid grid-cols-1 gap-12 mt-16">
      <div id="filterside" className="grid md:grid-cols-2 grid-rows-2 justify-between md:mx-9 mx-auto">
        <h3 className="result-text">Arama Sonuçları</h3>
        <div className="text-end my-auto">
          <select className="search-filter" name="search-filter" onChange={(e) => setOrder(e.target.value)}>
            <option value="-1" defaultValue={-1}>Filtrele</option>
            <option value="1">Artan Fiyat</option>
            <option value="2">Azalan Fiyat</option>
            <option value="3">En Yeni İlanlar</option>
            <option value="4">En Yüksek Puan Alanlar</option>
          </select>
        </div>
      </div>
      {loading ? (
        <Loading />
      ) : (
        <>
          {ads.length > 0 ? (
            ads.map((item, index) => <AdTableRow key={index} ad={item} index={index} adsLength={ads.length} />)
          ) : (
            <p className="mx-auto">Herhangi bir ilan bulunamadı!</p>
          )}

          <Pagination
            totalCount={totalRecord}
            limit={limit}
            start={start}
            setStart={setStart}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            setLoading={setLoading}
            loadScreen={true}
          />
        </>
      )}
      </div>
  );
};

export default AdList;

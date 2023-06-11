const Pagination = ({
    totalCount,
    limit,
    start,
    setStart,
    currentPage,
    setCurrentPage,
    setLoading,
    loadScreen = false,
}) => {

    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(totalCount / limit); i++) {
        pageNumbers.push(i);
    }

    let visiblePages = [];
    if (pageNumbers.length <= 3) {
        visiblePages = pageNumbers;
    } else {
        const leftSide = 1;
        const rightSide = 1;
        const lastPage = pageNumbers.length;

        if (currentPage <= leftSide) {
            visiblePages = [...pageNumbers.slice(0, 3), lastPage];
        } else if (currentPage > lastPage - rightSide) {
            visiblePages = [1, ...pageNumbers.slice(lastPage - 3)];
        } else {
            visiblePages = [1, ...pageNumbers.slice(currentPage - leftSide - 1, currentPage + rightSide), lastPage,];
        }

        if (visiblePages[0] > 1) {
            visiblePages = [1, -1, ...visiblePages.slice(1)];
        }
        if (visiblePages[0] + 1 < visiblePages[1]) {
            visiblePages = [visiblePages[0], -1, ...visiblePages.slice(1)];
        }
        if (visiblePages[visiblePages.length - 1] < lastPage) {
            visiblePages = [...visiblePages.slice(0, -1), -1, lastPage];
        }
        if (visiblePages[visiblePages.length - 2] < lastPage - 1) {
            visiblePages = [...visiblePages.slice(0, -1), -1, lastPage];
        }
    }

    // Son sayfayı visiblePages dizisine ekliyor
    if (!visiblePages.includes(pageNumbers.length)) {
        visiblePages.push(pageNumbers.length);
    }

    // visiblePages'de son eleman iki kez tekrar ediyorsa sondaki bir elemanı siliyor
    if (visiblePages[visiblePages.length - 2] === visiblePages[visiblePages.length - 1]) {
        visiblePages.pop();
    }

    // visiblePages'de ilk eleman iki kez tekrar ediyorsa ilk elemanı siliyor
    if (visiblePages[0] === visiblePages[1]) {
        visiblePages.shift();
    }

    return (
        <>
            {pageNumbers.length > 1 && (
                <div>
                    <ul className="flex gap-1 justify-center mt-4">
                        <li>
                            <button
                                type="button"
                                className="button search-button h-9 w-9 sm:w-14 cursor-pointer hover:bg-card focus:bg-orange focus:text-white"
                                onClick={() => {
                                    if (currentPage !== 1) {
                                        setStart(start - limit);
                                        setCurrentPage(currentPage - 1);
                                        loadScreen && setLoading(true);
                                    }
                                }}
                            >
                                <span className="hidden sm:block">Geri</span>
                                <span className="material-symbols-outlined sm:hidden font-bold text-[19px]">keyboard_arrow_left</span>
                            </button>
                        </li>
                        {visiblePages.map((num, index) => (
                            <li key={index}>
                                {num === -1 ? (
                                    <span className="mx-1 h-full align-middle font-bold text-[16px] pb-[8px] hidden sm:block"> ... </span>
                                ) : (
                                    <a
                                        className={`button search-button h-9 w-5 hover:bg-card cursor-pointer shadow-none focus:bg-orange focus:text-white ${currentPage === num && "active-button"
                                            }`}
                                        onClick={() => {
                                            if (pageNumbers.length > 1) {
                                                setStart(limit * (num - 1));
                                                setCurrentPage(num);
                                                loadScreen && setLoading(true);
                                            }
                                        }}
                                    >
                                        {num}
                                    </a>
                                )}
                            </li>
                        ))}

                        <li>
                            <button
                                type="button"
                                className="button search-button h-9 w-9 sm:w-14 cursor-pointer hover:bg-card focus:bg-orange focus:text-white"
                                onClick={() => {
                                    if (currentPage !== Math.ceil(totalCount / limit)) {
                                        setStart(start + limit);
                                        setCurrentPage(currentPage + 1);
                                        loadScreen && setLoading(true);
                                    }
                                }}
                            >
                                <span className="hidden sm:block">İleri</span>
                                <span className="material-symbols-outlined sm:hidden font-bold text-[19px]">keyboard_arrow_right</span>
                            </button>
                        </li>
                    </ul>
                </div>
            )}
        </>
    );
};

export default Pagination;
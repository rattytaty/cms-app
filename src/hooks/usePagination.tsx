import {useState} from "react";
type usePaginationType = {
    currentPage:number
    totalPages:number
    setPage:(page:number)=>void
    nextPage:()=>void
    prevPage:()=>void
}

export const usePagination = (itemsOnPage: number, totalItems: number):usePaginationType => {
    const [currentPage, setCurrentPage] = useState(1)
    const totalPages = Math.ceil(totalItems / itemsOnPage)
    const setPage = (page: number) => {

        if (page > totalPages) {
            setCurrentPage(totalPages);
        } else if (page < 1) {
            setCurrentPage(1);
        } else {
            setCurrentPage(page);
        }
    };
    const nextPage = () => setPage(currentPage + 1)
    const prevPage = () => setPage(currentPage - 1)


    return {
        currentPage,
        totalPages,
        setPage,
        nextPage,
        prevPage
    }
}
import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { useParams } from "react-router-dom"
import { fetchBooks } from "../features/books/booksSlice"
import { CircularProgress, Grid, Typography } from "@mui/material"
import Book from "./Book"

const Category = () => {
    let { category } = useParams();
    if(!category){
        category = 'fiction';
    }
    const dispatch = useDispatch();
    const books = useSelector((state) => state.books.books[category]);
    const {loading, error} = useSelector((state) => state.books);

    useEffect(() => {
        dispatch(fetchBooks(category))
    }, [dispatch, category])

  return (
    <>
    {loading && (
        <div
        style={{
            display: 'flex',
            justifyContent: 'center',
            marginTop: '20px'
        }}>
            <CircularProgress />
        </div>
    )}
    {error && (
        <Typography
        variant="h6"
        color="error"
        style={{ marginTop: '20px'}}>
            Error: {error}
        </Typography>
    )}
    {!loading && !error && books.length === 0 && (
        <Typography variant="h6" style={{ marginTop: '20px'}}>
            No books found in this category.
        </Typography>
    )}
    <Grid container spacing={3} style={{ marginTop: '20px'}}>
        {books.map((book) => (
        <Grid item key={book.key} xs={12} sn={6} md={4} lg={3}>
            <Book book={book}/>
        </Grid>
))}
    </Grid>
    </>
  )
}

export default Category
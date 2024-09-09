const movies = [
    {
        id:'00001',
        title: "Vikram",
        genre: { _id: 10101, gname: "Action" },
        dailyRentalRate: 4.5,
        publishDate: "2022-05-01"
    },
    {
        id:'00002',
        title: " vidudhalai",
        genre: { _id: 10102, gname: "Drama" },
        dailyRentalRate: 4.5,
        publishDate: "2023-08-09"
    },
    {
        id:'00003',
        title: "Leo",
        genre: { _id: 10103, gname: "Action" },
        dailyRentalRate: 4.5,
        publishDate: "2023-10-19"
    },
    {
        id:'00004',
        title: "Jigardhanatha Double XX ",
        genre: { _id: 10104, gname: "Gangster-Action" },
        dailyRentalRate: 4.5,
        publishDate: "2023-11-10"
    },
    {
        id:'00005',
        title: "Good Night",
        genre: { _id: 10101, gname: "Comedy" },
        dailyRentalRate: 4.5,
        publishDate: "2022-10-10"
    },
];

export default function getMovies(){
    return movies;
}